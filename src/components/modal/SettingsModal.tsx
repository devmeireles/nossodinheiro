'use client';

import useSettingsModal from "@/hooks/useSettingsModal";
import SettingsForm from "../form/SettingsForm";
import DefaultModal from "./DefaultModal";

const SettingsModal = () => {
  const settingsModal = useSettingsModal();

  const bodyContent = <SettingsForm />

  const footerContent = (<></>);

  return (
    <DefaultModal
      disabled={false}
      isOpen={settingsModal.isOpen}
      title="Configurações"
      actionLabel="Continue"
      onClose={settingsModal.onClose}
      onSubmit={() => { }}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default SettingsModal;

