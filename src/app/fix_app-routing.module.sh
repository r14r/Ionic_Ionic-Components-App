find pages -name "component.ts" | while read FILE
do
    FLDR=${FILE%/*}
    NAME=${FILE##*/}

    LINK=${FLDR/pages\//}
    MODULE=$(grep 'export class' $FILE | cut -d' ' -f3)

    echo "{ path: '$LINK/:id', loadChildren: () => import('./$FLDR/module').then( m => m.${MODULE}Module) },"
done
