const init = () => {
    let addBtn = document.querySelector('#add-btn');
    let itemName = document.querySelector('#item-name');

    // 新增項目統一收納
    const doAddItem = () => {
        let value = itemName.value;

        if (!value) {
            Swal.fire({
                title: '新增錯誤',
                text: '請輸入項目名稱',
                icon: 'error',
            }).then(() => {
                setTimeout(() => {
                    itemName.focus();
                }, 1000)

            })

            return;
        }

        let ul = document.querySelector('#pending-item');
        ul.innerHTML +=  `
        <li>
          <input type="checkbox" >
          <label for="">${value}</label>
        </li>
        `
    }

    addBtn.addEventListener('click', () => {
        doAddItem();
    });

    itemName.addEventListener('keyup', (e) => {
        if (e.key == 'Enter') {
            doAddItem();
        }
    });


};
let save = document.querySelector('#save-btn')
save.addEventListener('click', () => {
    Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
        }
    })
});
init();