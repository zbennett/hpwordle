import { useState } from 'react'
import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'
import { BuyMeACoffeeModal } from './BuyMeACoffeeModal'
import venmoSvg from "../../images/vemo.svg";
import btcSvg from "../../images/Bitcoin.png";

type Props = {
  isOpen: boolean
  handleClose: () => void
  handleCopy: () => void
}

export const InfoModal = ({ isOpen, handleClose, handleCopy }: Props) => {
  const [isBuyMeModalOpen, setBuyMeModalOpen] = useState(false)
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Wizarding Wordle | A Harry Potter Wordle <br></br>
        Guess the word in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word. Each day there will
        be a new length word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="W"
          status="correct"
        />
        <Cell value="E" />
        <Cell value="A" />
        <Cell value="R" />
        <Cell value="Y" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter W is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell value="I" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="L"
          status="present"
        />
        <Cell value="O" />
        <Cell value="T" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter L is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="V" />
        <Cell value="A" />
        <Cell value="G" />
        <Cell isRevealing={true} isCompleted={true} value="U" status="absent" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter U is not in the word in any spot.
      </p>

      <div className='border-solid border-2 rounded-lg border-indigo-600 mt-4'>
            <span className='text-gray-900 dark:text-gray-100 font-medium'>
            Support the site
              </span>
              <div>
              <a href="https://venmo.com/harrypotterwordle?txn=pay"
                className='focus:outline-none'
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>
                  <img className='venmo' src={venmoSvg} alt=""/>
                </button>
              </a>

                <button className='focus:outline-none' onClick={() => setBuyMeModalOpen(true)}>
                  <img className='venmo' src={btcSvg} alt=""/>
                </button>
              </div>
            </div>

      <BuyMeACoffeeModal
        isOpen={isBuyMeModalOpen}
        handleClose={() => setBuyMeModalOpen(false)}
        handleCopy={() => handleCopy()}
      />
    </BaseModal>
  )
}
