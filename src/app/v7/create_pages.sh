camelcase_dash() {
    IFS=- read -ra str <<<"$1"
    printf '%s' "${str[@]^}"
}

camelcase_slash() {
    IFS=/ read -ra str <<<"$1"
    printf '%s' "${str[@]^}"
}


find . -name demo.html | while read FILE
do
    TEMP=$(dirname  $FILE)
    TEMP=${TEMP/\.\//}

    FLDR1=$(dirname         $TEMP)
    FLDR2=$(camelcase_slash $FLDR1)

    PAGE=$(basename         $TEMP)    
    PAGE=$(camelcase_dash   $PAGE)

    echo "$FILE => ${FLDR1} | ${FLDR2}${PAGE}"
done