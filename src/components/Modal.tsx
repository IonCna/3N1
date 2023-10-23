import { useState } from "preact/hooks"

interface Props {
  title: string
  content: string
  open: boolean
  id: string
}

const Modal = ({ title, content, id }: Props) => {
  const [visible] = useState(false)

  const toggle = () => {
    const target = document.getElementById(id) as HTMLDialogElement
    target.showModal()
  }

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  )
}

export default Modal
