find pages -name "*component*" | while read FILE
do
    FLDR=${FILE%/*}
    NAME=${FILE##*/}
    TYPE=${NAME##*.}

    #echo FILE=$FILE
    #echo FLDR=$FLDR
    #echo NAME=$NAME
    #echo TYPE=$TYPE

    echo "mv $FILE $FLDR/component.${TYPE}"
done
