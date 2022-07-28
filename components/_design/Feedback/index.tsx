import React, { useState, useEffect } from 'react';
import {
  Check,
  InfoCircle,
  Error,
  ErrorAlt,
} from '@styled-icons/boxicons-regular';
import * as S from './styled';

type styleType = 'success' | 'info' | 'warn' | 'error';
type EventType = {
  message: string;
  style: styleType;
};
type ReturnType = [EventType, Function];

export const useFeedback = (): ReturnType => {
  const [event, setEvent] = useState<EventType>({ message: '', style: 'info' });

  useEffect(() => {
    if (event.message) {
      const timer = setTimeout(
        (_style = 'info') => {
          setEvent({ message: '', style: _style });
        },
        5000,
        event.style
      );
      return () => clearTimeout(timer);
    }
  }, [event]);

  const toggleFeedback = (messageEv: string, style: styleType) => {
    setEvent({ message: messageEv, style: style });
  };
  return [event, toggleFeedback];
};

const setColor = (style: string) => {
  switch (style) {
    case 'success':
      return 'green';
    case 'info':
      return 'blue';
    case 'warn':
      return 'yellow';
    case 'error':
      return 'red';
    default:
      return 'blue';
  }
};

const Icon: React.FC<{ style: styleType }> = ({ style }) => {
  switch (style) {
    case 'success':
      return <Check />;
    case 'info':
      return <InfoCircle />;
    case 'warn':
      return <Error />;
    case 'error':
      return <ErrorAlt />;
    default:
      return <InfoCircle />;
  }
};

export const Feedback: React.FC<{ feedback: EventType }> = ({ feedback }) => (
  <S.Overflow display={feedback.message ? 1 : 0}>
    <S.Wrapper color={setColor(feedback.style)} display={feedback.message ? 1 : 0}>
      <S.Container>
        <S.Icon>
          <Icon style={feedback.style} />
        </S.Icon>
        <S.Text>{feedback.message}</S.Text>
      </S.Container>
    </S.Wrapper>
  </S.Overflow>
);
