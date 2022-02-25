import { BaseModal } from './BaseModal'
import qrCode from '../../images/qr_code.png';

type Props = {
  isOpen: boolean
  handleClose: () => void
  handleCopy: () => void
}

export const BuyMeACoffeeModal = ({ isOpen, handleClose, handleCopy }: Props) => {
  const shareStatus = () => {
    navigator.clipboard.writeText("bc1qx5rqk2m526k93stuyp25c4uy6vwe46p50dwpyy");
    handleCopy();
    // showSuccess("Copied to clipboard");
  }
  return (
    <BaseModal title="Buy Me A Coffee" isOpen={isOpen} handleClose={handleClose}>
       <div className='flex justify-center'>
       <img src={qrCode} alt="bc1qx5rqk2m526k93stuyp25c4uy6vwe46p50dwpyy"/>
      </div>
      <div className='flex justify-center text-gray-500 dark:text-gray-300 qr'>
      bc1qx5rqk2m526k93stuyp25c4uy6vwe46p50dwpyy
      </div>
      <div>
      <button
            type="button"
            className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            onClick={() => {
              shareStatus()
            }}
          >
            Copy
          </button>
      </div>
      
      
    </BaseModal>
  )
}
