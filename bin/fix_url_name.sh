find pages -name "component.ts" | while read FILE
do
    FLDR=${FILE%/*}
    NAME=${FILE##*/}

    LINK=${FLDR/pages\//}
    TEMP=$(grep 'templateUrl' $FILE | cut -d/ -f2)

    TEMP=${TEMP%.*}
    echo FILE=$FILE

    sed -i 's/'$TEMP'/component/' ${FLDR}/*
done
