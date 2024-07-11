import { Calendar, MapPin, Plus, Settings2 } from 'lucide-react'
import { useState } from 'react'
import { CreateActivityModal } from './create-activity-modal'
import { ImportantLinks } from './important-links'
import { Guests } from './guests'
import { Activities } from './activities'
import { DestinationDateHeader } from './destination-date-header'
import { Button } from '../../components/button'

export function TripDetails() {
  const [isCreateActivityModal, setIsCreateActivityModal] = useState(false)

  function handleCreateActivityModal() {
    setIsCreateActivityModal(!isCreateActivityModal)
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <DestinationDateHeader />

      <main className="flex gap-16 px-6">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <Button onClick={handleCreateActivityModal} colors="primary">
              <Plus className="size-5" />
              Cadastrar atividade
            </Button>
          </div>

          <Activities />
        </div>
        <div className="w-80 space-y-6">
          <ImportantLinks />
          <div className="w-full h-px bg-zinc-800"></div>
          <Guests />
        </div>
      </main>

      {isCreateActivityModal && (
        <CreateActivityModal
          handleCreateActivityModal={handleCreateActivityModal}
        />
      )}
    </div>
  )
}
