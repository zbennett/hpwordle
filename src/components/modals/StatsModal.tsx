import { useState, useEffect  } from 'react'
import Countdown from 'react-countdown'
import { StatBar } from '../stats/StatBar'
import { Histogram } from '../stats/Histogram'
import { GameStats } from '../../lib/localStorage'
import { shareStatus } from '../../lib/share'
import { tomorrow } from '../../lib/words'
import { BaseModal } from './BaseModal'
import { BuyMeACoffeeModal } from './BuyMeACoffeeModal'
import venmoSvg from "../../images/vemo.svg";
import btcSvg from "../../images/Bitcoin.png";
import cashSvg from "../../images/Cash.svg";
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

const loadVenmo = () => {
  window.location.href = "https://venmo.com/harrypotterwordle?txn=pay";
  setTimeout(function () {
    window.location.href = "https://venmo.com/code?user_id=3565082432767948409&created=1655761769.411992&printed=1";
  }, 1000);
}

const loadCash = () => {
  window.location.href = "https://cash.app/$HarryPotterWordle";
};

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
        <div className="mt-5 sm:mt-6 columns-2 dark:text-white grid grid-cols-2">
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
          <div >
            <div className='border-solid border-2 rounded-lg border-indigo-600'>
            <span className='text-gray-900 dark:text-gray-100 font-medium'>
            Support the site
              </span>
              <div>
              <button className='focus:outline-none' onClick={() => loadVenmo()}>
                <img className='venmo mx-1.5' src={venmoSvg} alt=""/>
              </button>
              <button
                  className="focus:outline-none"
                  onClick={() => loadCash()}
                >
                  <img className="venmo" src={cashSvg} alt="" />
                </button>

              <button className='focus:outline-none' onClick={() => setBuyMeModalOpen(true)}>
                <img className='venmo mx-2' src={btcSvg} alt=""/>
              </button>
              </div>
            </div>
              

              <button
            type="button"
            className="mt-2 w-full border-solid border-2 rounded-lg border-indigo-600 px-4 py-2 text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
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
          className="twitter-follow-button text-blue-500 border-transparent focus:outline-none"
          data-show-count="false"
        >
          &nbsp;@HPWordle
        </a>
        
      </div>

      <BuyMeACoffeeModal
        isOpen={isBuyMeModalOpen}
        handleClose={() => setBuyMeModalOpen(false)}
        handleCopy={() => handleCopy()}
      />
    </BaseModal>
  )
}
