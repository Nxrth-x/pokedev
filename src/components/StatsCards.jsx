import React from 'react'
import { motion } from 'framer-motion'

import { HiLightningBolt } from 'react-icons/hi'
import { FiShield } from 'react-icons/fi'
import { BiPulse } from 'react-icons/bi'
import { IoSpeedometerOutline } from 'react-icons/io5'

export default function StatsCards({ stats }) {
  const variants = {
    hidden: {
      opacity: 0,
      translateY: -100,
    },
    visible: {
      opacity: 1,
      translateY: 0,
    },
  }

  return (
    <div className="grid grid-cols-4 gap-4 text-gray-700">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        className="bg-white rounded-xl shadow-xl py-4 px-2 flex flex-col items-center"
      >
        <HiLightningBolt className="mb-2 w-6 h-6 text-yellow-400" />
        <p>Attack</p>
        <p>
          <b className="text-xl">{stats.attack}</b>
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: 0.125 }}
        className="bg-white rounded-xl shadow-xl py-4 px-2 flex flex-col items-center"
      >
        <FiShield className="mb-2 w-6 h-6 text-green-400" />
        <p>Defense</p>
        <p>
          <b className="text-xl">{stats.defense}</b>
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: 0.25 }}
        className="bg-white rounded-xl shadow-xl py-4 px-2 flex flex-col items-center"
      >
        <BiPulse className="mb-2 w-6 h-6 text-blue-400" />
        <p>Health</p>
        <p>
          <b className="text-xl">{stats.hp}</b>
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: 0.375 }}
        className="bg-white rounded-xl shadow-xl py-4 px-2 flex flex-col items-center"
      >
        <IoSpeedometerOutline className="mb-2 w-6 h-6 text-red-400" />
        <p>Speed</p>
        <p>
          <b className="text-xl">{stats.speed}</b>
        </p>
      </motion.div>
    </div>
  )
}
