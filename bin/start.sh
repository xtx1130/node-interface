#!/bin/zsh
#ulimit -c unlimited
baseurl="/Users/xtx/Desktop/qiyi/node-interface/";
cd $baseurl;
num=$1;
outlog=$baseurl"pm2log/outputlog.log";
errlog=$baseurl"pm2log/errlog.log";
for((i=0;i<$num;i++)){
      port=$(($i+8031));
      name="interface${i}";
      #nohup node index.js $port  2>/dev/null &
      pm2 start index.js -n $name -o $outlog -e $errlog -- $port     
}
exit 0;