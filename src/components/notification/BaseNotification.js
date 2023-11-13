import Swal from "sweetalert2";


class BaseNotification {

    static fireToast(icon, title){
        const toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        return toast.fire({
            customClass: {
                container: 'my-swal'
            },
            icon: icon,
            title: title
        })
    }

}

export default BaseNotification
