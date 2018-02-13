#!/bin/bash

make

if [ "$#" -ne 4 ]; then
 echo "Usage : ./info.sh <R video file> <L video file> <G video file> <G video name>"

else
  ./exTimecode.sh $1 Rtimecode.txt
  ./exTimecode.sh $2 Ltimecode.txt
  ./exTimecode.sh $3 Gtimecode.txt

  #rm -rf public/data.xml
  touch public/data.xml

  if [ -f $4 ]
    then
      ./parser Rtimecode.txt Ltimecode.txt Gtimecode.txt $4
      rm $4
    fi
fi
make clean
