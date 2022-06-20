import { useState } from 'react'
import Countdown from 'react-countdown'
import { StatBar } from '../stats/StatBar'
import { Histogram } from '../stats/Histogram'
import { GameStats } from '../../lib/localStorage'
import { shareStatus } from '../../lib/share'
import { tomorrow } from '../../lib/words'
import { BaseModal } from './BaseModal'
import { BuyMeACoffeeModal } from './BuyMeACoffeeModal'
import {
  STATISTICS_TITLE,
  GUESS_DISTRIBUTION_TEXT,
  NEW_WORD_TEXT,
  SHARE_TEXT,
} from '../../constants/strings'

type Props = {
  isOpen: boolean
  handleClose: () => void
  guesses: string[]
  gameStats: GameStats
  isGameLost: boolean
  isGameWon: boolean
  handleShareToClipboard: () => void
  isHardMode: boolean
  isDarkMode: boolean
  isHighContrastMode: boolean
  handleCopy: () => void
}

export const StatsModal = ({
  isOpen,
  handleClose,
  guesses,
  gameStats,
  isGameLost,
  isGameWon,
  handleShareToClipboard,
  isHardMode,
  isDarkMode,
  isHighContrastMode,
  handleCopy,
}: Props) => {
  const [isBuyMeModalOpen, setBuyMeModalOpen] = useState(false)
  if (gameStats.totalGames <= 0) {
    return (
      <BaseModal
        title={STATISTICS_TITLE}
        isOpen={isOpen}
        handleClose={handleClose}
      >
        <StatBar gameStats={gameStats} />
      </BaseModal>
    )
  }
  return (
    <BaseModal
      title={STATISTICS_TITLE}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <StatBar gameStats={gameStats} />
      <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
        {GUESS_DISTRIBUTION_TEXT}
      </h4>
      <Histogram gameStats={gameStats} />
      {(isGameLost || isGameWon) && (
        <div className="mt-5 sm:mt-6 columns-2 dark:text-white">
          <div>
            <div className='mt-10'></div>
            <div>
            <h5>{NEW_WORD_TEXT}</h5>
            <Countdown
              className="text-lg font-medium text-gray-900 dark:text-gray-100"
              date={tomorrow}
              daysInHours={true}
            />
          </div>
          </div>
          <button type="button" className='mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 sm:text-sm focus:outline-none'  onClick={() => setBuyMeModalOpen(true)}>
            Support the site
          </button>
          <button
            type="button"
            className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            onClick={() => {
              shareStatus(
                guesses,
                isGameLost,
                isHardMode,
                isDarkMode,
                isHighContrastMode,
                handleShareToClipboard
              )
            }}
          >
            {SHARE_TEXT}
          </button>
        </div>
      )}
            <div className="mt-4">
        <p className="dark:text-white">
          Looking for more of a challenge? Try our{' '}
          <a
            className="text-blue-500 focus:outline-none"
            href="https://myrtle.harrypotterwordle.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            character guessing wordle
          </a>
          &nbsp;or our&nbsp;
          <a
            className="text-blue-500 focus:outline-none"
            href="https://www.harrypotterwordle.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            standard wordle.
          </a>
        </p>
      </div>
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
