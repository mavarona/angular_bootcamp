
function active ( name: string, environment: string = "development", timestamp?: Date ): void {

    let message: string;

    if( timestamp ){
        message = `${ name } active for ${ environment } in ${timestamp}`;
    } else {
        message = `${ name } active for ${ environment }`;
    }



    console.log(message);

}


active('sales', 'production');
active('sales', 'production', new Date().toDateString());