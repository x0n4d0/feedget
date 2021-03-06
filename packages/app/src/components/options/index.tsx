import React from 'react';
import { View, Text } from 'react-native';
import { feedbackTypes } from '../../utils/feedback-types';
import { Copyright } from '../copyright';
import { Option } from '../option';
import { FeedbackType } from '../widget';

import { styles } from './styles';

interface Props {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void;
}

export function Options({ onFeedbackTypeChanged }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Deixe seu feedback
      </Text>

      <View style={styles.options}>
        {
          Object
            .entries(feedbackTypes)
            .map(([key, value]) => (
              <Option
                key={key}
                title={value.title}
                image={value.image}
                onPress={() => onFeedbackTypeChanged(key as FeedbackType)}
              />
            ))
        }
      </View>
      <Copyright />
    </View>
  );
}
