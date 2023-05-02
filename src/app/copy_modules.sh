find pages -name "component.ts" | while read FILE
do
    FLDR=${FILE%/*}
    NAME=${FILE##*/}

    MODULE=$(grep 'export class' $FILE | cut -d' ' -f3)
    echo "FLDR=$FLDR MODULE=$MODULE"

    cp TEMPLATE/* $FLDR

    sed -i 's/TemplateComponent/'$MODULE'/' ${FLDR}/*
done
