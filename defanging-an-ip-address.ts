function defangIPaddr(address: string): string {
    let result_address: string = "";

    for (let idx = 0; idx < address.length; idx++) {
        if (address[idx] === ".") {
            result_address += "[.]";
        } else {
            result_address += address[idx];
        }
    }

    return result_address;
};
