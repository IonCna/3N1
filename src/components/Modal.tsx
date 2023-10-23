import { useEffect } from "preact/hooks"

interface Props {
  open: boolean
  id: string
  message: string
}

const Modal = ({ id, open, message }: Props) => {

  const Toggle = () => {
    const target = document.getElementById(id) as HTMLDialogElement
    target.showModal()
  }

  useEffect(() => {
    open && Toggle()
  }, [open])

  return (
    <dialog id={id} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Ups!</h3>
        <p className="py-4">{ message }</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-primary">Ok</button>
          </form>
        </div>
      </div>
    </dialog>
  )
}

export default Modal
