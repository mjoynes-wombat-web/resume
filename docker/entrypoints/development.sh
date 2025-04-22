#!/usr/bin/zsh

source /root/.zshrc

eval "$(ssh-agent -s)"

ssh-add

cd /app

deps-ok
if [ $? -eq 0 ]; then
    echo "Modules Up-To-Date"
else
    echo "Module Updates Needed - Executing 'npm install'"
    npm install --include=dev
fi

tail -f /dev/null