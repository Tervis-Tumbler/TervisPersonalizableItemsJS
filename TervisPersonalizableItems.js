const $IsBrowser = !(typeof window === 'undefined');

let $PersonalizableItems

export async function Test_IsTervisItemPersonalizable({
    $ItemNumber
}) {
    /*
    //duplicated to work around top level await, remove once top level await is supported
    if (!$IsBrowser) {
        var fetch = (await import("node-fetch")).default
    } else {
        var fetch = window.fetch
    }
    */
    
    if (!$PersonalizableItems) {
        $PersonalizableItems = await fetch(
            `https://tervislrstorage.blob.core.windows.net/tervisshopify/PersonalizableItems_Production.json`
        ).then($Response => $Response.json())
    }

    let $IsPersonalizable 
    if ($ItemNumber !== undefined) {
        $IsPersonalizable = $PersonalizableItems.includes($ItemNumber.toString())
    } else {
        $IsPersonalizable = false
    }
    
    return $IsPersonalizable
}
