import { camel_to_snake } from "./src/utils/camel_to_snake"

// local terms until remote config available
const active_lexicon: any = {
    start: {
        en: "start",
        he: "התחל",
        ar: "بدء"
    },
}



// roles to use the terms system
// 1.  the object name will be allways lowercase and snake_case
// 2.  the object value will be the term name in the language
// 3.  the object key will be the role name in the language

export default function term(name: string, default_val?: string, lng = 'en') {
    name = camel_to_snake(name)
    return (name in active_lexicon ? active_lexicon[name][lng]
        : (default_val === undefined ? name
            : default_val
        )
    )
}