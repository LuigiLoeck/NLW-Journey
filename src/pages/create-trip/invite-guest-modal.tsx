import { AtSign, Plus, X } from 'lucide-react'
import { FormEvent } from 'react'
import { Button } from '../../components/button'

interface InviteGuestsModalProps {
  handleGuestsModal: () => void
  guests: string[]
  handleAddGuests: (event: FormEvent<HTMLFormElement>) => void
  handleRemoveGuest: (email: string) => void
}

export function InviteGuestsModal({
  handleGuestsModal,
  guests,
  handleAddGuests,
  handleRemoveGuest
}: InviteGuestsModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Selecionar convidados</h2>
          <button type="button" onClick={handleGuestsModal}>
            <X className="size-5 text-zinc-400" />
          </button>
        </div>
        <p className="text-sm text-zinc-400 mt-2">
          Os convidados irão receber e-mails para confirmar a participação na
          viagem.
        </p>
        <div className="flex flex-wrap gap-2">
          {guests.map(guest => {
            return (
              <div
                key={guest}
                className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
              >
                <span className="text-zinc-300">{guest}</span>
                <button type="button" onClick={() => handleRemoveGuest(guest)}>
                  <X className="size-4 text-zinc-400" />
                </button>
              </div>
            )
          })}
        </div>
        <div className="w-full h-px bg-zinc-800"></div>
        <form
          onSubmit={handleAddGuests}
          className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2"
        >
          <div className="px-2 flex items-center flex-1 gap-2">
            <AtSign className="size-5 text-zinc-400" />
            <input
              type="email"
              name="email"
              placeholder="Digite o e-mail do convidado"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>

          <Button type="submit" colors="primary">
            Convidar
            <Plus className="size-5" />
          </Button>
        </form>
      </div>
    </div>
  )
}
