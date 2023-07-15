產生 rsa 金鑰

```
ssh-keygen -t rsa -f [path] -C [username]

rsa -b 2048 -C jush
```

pub 那份貼到 gcp 上 安全殼層金鑰

透過 ssh 連線 gcp

```
ssh jush@34.81.252.6
```

安裝 nginx server 與環境

```
sudo apt install nginx
sudo apt install nodejs
sudo apt install npm
sudo apt-get install git-all
```

安裝 nvm 管理 node 版本

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

然後在虛擬機拉 code 下來 build
然後掛到 nginx 裡面就發布完成了

Nginx 的主要設定檔通常會放置在 /etc/nginx/nginx.conf
另外在 /etc/nginx/conf.d/\*.conf 則會放置不同域名的 config file
例如： /etc/nginx/conf.d/kylemocode.com.conf
然後在主設定檔中的 http context 加入一行

修改資料夾存取權限 要開權限才可以編輯
sudo chown -R {User} {Path}
