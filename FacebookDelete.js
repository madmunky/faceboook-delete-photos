//https://www.facebook.com/{UserID}/photos
const delay = ms => new Promise(res => setTimeout(res, ms));
const shortWait = 500
const longWait = 5000;

const deleteMyPhotos = async () => {
    const photos = document.getElementsByClassName('rq0escxv rj1gh0hx buofh1pr ni8dbmo4 stjgntxs l9j0dhe7');

    for (var i = 10; i < photos.length; i++) {

        let photo = photos[i];
        let editBtn = photo.children[0].children[0].getElementsByClassName('b5fwa0m2 pmk7jnqg plgsh5y4')[0].children[0].children[0];
        editBtn.click()
        await delay(shortWait);

        let DeleteNode = document.getElementsByClassName('d2edcug0 hpfvmrgz qv66sw1b c1et5uql lr9zc1uh a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d3f4x2em fe6kdd0r mau55g9w c8b282yb iv3no6db jq4qci2q a3bd9o3v ekzkrbhg oo9gr5id hzawbc8m')[2]

        if (DeleteNode != undefined) {
            let DeleteText = DeleteNode.innerText

            if (DeleteText === "Delete photo") {
                //Click Delete
                DeleteNode.click()
                await delay(shortWait);
                document.getElementsByClassName('d2edcug0 hpfvmrgz qv66sw1b c1et5uql lr9zc1uh a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d3f4x2em fe6kdd0r mau55g9w c8b282yb iv3no6db jq4qci2q a3bd9o3v lrazzd5p bwm1u5wc')[1].click()
                await delay(longWait);
                i--;
            } else {
                DeleteNode = Array.from(document.querySelectorAll('span')).find(el => el.textContent === 'Delete photo');
                if (DeleteNode != undefined) {
                    DeleteNode.click();
                    await delay(shortWait);
                    document.getElementsByClassName('d2edcug0 hpfvmrgz qv66sw1b c1et5uql lr9zc1uh a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d3f4x2em fe6kdd0r mau55g9w c8b282yb iv3no6db jq4qci2q a3bd9o3v lrazzd5p bwm1u5wc')[1].click()
                    await delay(longWait);
                    i--;
                } else {
                    editBtn.click();
                }
            }
        } else {
            editBtn.click();
        }
    }
}

deleteMyPhotos();