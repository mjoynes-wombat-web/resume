FROM node:23 AS build

WORKDIR /app

RUN npm install -g deps-ok

RUN apt-get update -y && apt-get install -y zsh vim nano locales

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY ../ .

CMD ["npm", "run", "dev"]

FROM build AS development

RUN CHSH=no sh -c "$(wget -O- https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

RUN sed -i '/en_US.UTF-8/s/^# //g' /etc/locale.gen && \
    locale-gen
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

RUN sed -i 's/plugins=(git)/plugins=(git z)/' /root/.zshrc && sed -i 's/ZSH_THEME=\"robbyrussell\"/ZSH_THEME=\"agnoster\"/' /root/.zshrc

RUN echo NVM_DIR="root/.nvm" >> /root/.zshrc
RUN echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm' >> /root/.zshrc
RUN echo '[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion' >> /root/.zshrc

RUN echo 'if [ -z "$SSH_AUTH_SOCK" ]; then' >> /root/.zshrc
RUN echo "RUNNING_AGENT=\"`ps -ax | grep 'ssh-agent -s' | grep -v grep | wc -l | tr -d '[:space:]'`\"" >> /root/.zshrc
RUN echo '   if [ "$RUNNING_AGENT" = "0" ]; then' >> /root/.zshrc
RUN echo '        ssh-agent -s &> $HOME/.ssh/ssh-agent' >> /root/.zshrc
RUN echo '   fi' >> /root/.zshrc
RUN echo '   eval `cat $HOME/.ssh/ssh-agent` > /dev/null' >> /root/.zshrc
RUN echo '   ssh-add $HOME/.ssh/id_rsa 2> /dev/null' >> /root/.zshrc
RUN echo 'fi' >> /root/.zshrc

RUN npm install --include=dev
