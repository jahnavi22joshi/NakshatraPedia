import { useFonts } from "expo-font";

// Inter
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

// Poppins
import {
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";

// Playfair Display
import {
  PlayfairDisplay_600SemiBold,
  PlayfairDisplay_700Bold,
} from "@expo-google-fonts/playfair-display";

import{
  Halant_500Medium,
} from "@expo-google-fonts/halant";

import {
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";

export default function useAppFonts() {
  return useFonts({
    // Inter
    InterRegular: Inter_400Regular,
    InterMedium: Inter_500Medium,
    InterBold: Inter_700Bold,

    // Poppins
    PoppinsRegular: Poppins_400Regular,
    PoppinsMedium: Poppins_900Medium,

    // Playfair
    PlayfairSemiBold: PlayfairDisplay_600SemiBold,
    PlayfairBold: PlayfairDisplay_700Bold,

    HalantMedium: Halant_500Medium,

    JostSemiBold: Jost_600SemiBold
  });
}