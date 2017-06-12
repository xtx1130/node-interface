#! bin/zsh
IFS=" 	
";
log=/Users/xtx/Desktop/qiyi/node-interface/logs;
cd ${log};
rm -rf `find \. -type f -mmin +120 -name "*.log"`;