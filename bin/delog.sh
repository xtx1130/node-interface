log=/Users/xtx/Desktop/qiyi/node-interface/logs;
cd ${log};
rm -rf `find \. -ctime 1 -name "*.log"`;