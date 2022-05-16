import { useState } from 'react'
import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'
import { BuyMeACoffeeModal } from './BuyMeACoffeeModal'

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
        change to show how close your guess was to the word.
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

      <button
        className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 sm:text-sm focus:outline-none"
        onClick={() => setBuyMeModalOpen(true)}
      >
        Support the site
      </button>

      <div className="dark:text-white">
        Questions, comments, concerns, suggestions? Tweet us
        <a
          href="https://twitter.com/HPWordle?ref_src=twsrc%5Etfw"
          className="dark:text-white twitter-follow-button text-blue-500 border-transparent focus:outline-none"
          data-show-count="false"
        >
          &nbsp;@HPWordle
        </a>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          // charset="utf-8"
        ></script>
      </div>
      <BuyMeACoffeeModal
        isOpen={isBuyMeModalOpen}
        handleClose={() => setBuyMeModalOpen(false)}
        handleCopy={() => handleCopy()}
      />
    </BaseModal>
  )
}
