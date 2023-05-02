find v7 -name "angular.md" | while read FILE
do
    FLDR=${FILE%/*}
    NAME=${FILE##*/}

    DEST=${FLDR/v7/pages}


    mkdir -p $DEST
    cp    $FILE ${DEST}/component.html


    sed -i 's/```.*//' ${DEST}/component.html
done
