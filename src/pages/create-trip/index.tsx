import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InviteGuestsModal } from "./invite-guest-modal";
import { ConfirmTripModal } from "./confirm-trip-modal";
import { DestinationDateStep } from "./steps/destination-date-step";
import { InviteGuestsStep } from "./steps/invite-guest-step";

export function CreateTrip() {
  const navigate = useNavigate();

  const [isGuestInputVisible, setIsGuestInputVisible] = useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const [guests, setGuests] = useState<string[]>(["teste@email.com"]);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  function handleGuestInputVisibility() {
    setIsGuestInputVisible(!isGuestInputVisible);
  }

  function handleGuestsModal() {
    setIsGuestModalOpen(!isGuestModalOpen);
  }

  function handleConfirmModal() {
    setIsConfirmModalOpen(!isConfirmModalOpen);
  }

  function handleAddGuests(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;

    if (!email || guests.includes(email)) return;

    setGuests([...guests, email]);

    event.currentTarget.reset();
  }

  function handleRemoveGuest(email: string) {
    setGuests(guests.filter((guest) => guest !== email));
  }

  function createTrip(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/trips/123");
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>
        <div className="space-y-4">
          <DestinationDateStep
            isGuestInputVisible={isGuestInputVisible}
            handleGuestInputVisibility={handleGuestInputVisibility}
          />

          {isGuestInputVisible && (
            <InviteGuestsStep
              handleConfirmModal={handleConfirmModal}
              handleGuestsModal={handleGuestsModal}
              guests={guests}
            />
          )}
        </div>
        <div className="flex items-center justify-center">
          <p className="text-sm text-zinc-500 max-w-lg">
            Ao planejar sua viagem pela plann.er você automaticamente concorda
            com nossos
            <a className="text-zinc-300 underline m-1" href="#">
              termos de uso
            </a>
            e
            <a className="text-zinc-300 underline m-1" href="#">
              políticas de privacidade
            </a>
            .
          </p>
        </div>
      </div>
      {isGuestModalOpen && (
        <InviteGuestsModal
          handleGuestsModal={handleGuestsModal}
          guests={guests}
          handleAddGuests={handleAddGuests}
          handleRemoveGuest={handleRemoveGuest}
        />
      )}

      {isConfirmModalOpen && (
        <ConfirmTripModal
          handleConfirmModal={handleConfirmModal}
          createTrip={createTrip}
        />
      )}
    </div>
  );
}
