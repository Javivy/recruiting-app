import React from 'react'
import { connectDB } from '@/utils/mongoose'
import Developers from '@/models/Developers';
import DeveloperCard from '@/components/DeveloperCard';

async function loadDevelopers() {
  connectDB();
  const developers = await Developers.find();
  return developers;
}

const HomePage = async () => {
  const developers = await loadDevelopers();

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-3 gap-x-6 gap-y-8 mb-5 mt-5">
        {
          developers.map(developer => (
            <DeveloperCard developer={developer} key={developer._id}></DeveloperCard>
          ))
        }
      </div>
    </div>
  )
}

export default HomePage