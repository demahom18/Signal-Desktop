// Copyright 2021 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import React from 'react';
import { Modal } from './Modal';
import { LocalizerType } from '../types/Util';
import { ConversationColorType } from '../types/Colors';

type PropsType = {
  i18n: LocalizerType;
  isChatColorEditorVisible: boolean;
  renderChatColorPicker: (actions: {
    setAllConversationColors: (color: ConversationColorType) => unknown;
  }) => JSX.Element;
  setAllConversationColors: (color: ConversationColorType) => unknown;
  toggleChatColorEditor: () => unknown;
};

export const GlobalModalContainer = ({
  i18n,
  isChatColorEditorVisible,
  renderChatColorPicker,
  setAllConversationColors,
  toggleChatColorEditor,
}: PropsType): JSX.Element | null => {
  if (isChatColorEditorVisible) {
    return (
      <Modal
        hasXButton
        i18n={i18n}
        moduleClassName="ChatColorPicker__modal"
        noMouseClose
        onClose={toggleChatColorEditor}
        title={i18n('ChatColorPicker__global-chat-color')}
      >
        {renderChatColorPicker({
          setAllConversationColors,
        })}
      </Modal>
    );
  }

  return null;
};
