const $IsBrowser = !(typeof window === 'undefined');

export async function Test_IsTervisItemPersonalizable({
    $ItemNumber
}) {
    //duplicated to work around top level await, remove once top level await is supported
    if (!$IsBrowser) {
        var fetch = (await import("node-fetch")).default
    } else {
        var fetch = window.fetch
    }

    let $PersonalizableItems = await fetch(
        `https://unpkg.com/@tervis/TervisPersonalizableItems/TervisPersonalizableItems.json`
    ).then($Response => $Response.json())

    return $PersonalizableItems.includes($ItemNumber.toString())
}
