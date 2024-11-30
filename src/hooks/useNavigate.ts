import { useNavigation } from '@react-navigation/native';

interface ScreenNavigationProp {
  navigate: (screen: string, params?: {}) => void;
  goBack: () => void;
}

export const useNavigate = () => {
  const navigation = useNavigation<ScreenNavigationProp>();

  const navigate = (screen: string, params?: {}) => {
    navigation.navigate(screen, params);
  };

  const goBack = () => {
    navigation.goBack();
  };

  return { navigate, goBack };
};