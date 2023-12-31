import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Transactions = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.transactions}>
      <Image
        style={[styles.transactionsChild, styles.transactionsLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-17.png")}
      />
      <Image
        style={[styles.transactionsItem, styles.transactionsLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-16.png")}
      />
      <Image
        style={styles.transactionsInner}
        resizeMode="cover"
        source={require("../assets/rectangle-18.png")}
      />
      <View style={styles.transactions1}>
        <View style={[styles.shopping, styles.sportsLayout]}>
          <View style={[styles.shoppingDetails, styles.shoppingPosition]}>
            <Text style={[styles.shopping1, styles.timeClr]}>Shopping</Text>
            <Text style={styles.march2021820}>15 march 2021, 8:20 PM</Text>
          </View>
          <Text style={[styles.text, styles.textTypo]}>-KSh.120</Text>
          <Image
            style={[styles.shoppingIcon, styles.sportsLayout]}
            resizeMode="cover"
            source={require("../assets/shopping-icon.png")}
          />
          <Image
            style={styles.smallArrow3}
            resizeMode="cover"
            source={require("../assets/small-arrow-3.png")}
          />
        </View>
        <View style={[styles.shopping2, styles.sportsLayout]}>
          <View style={[styles.shoppingDetails1, styles.shoppingPosition]}>
            <Text style={[styles.shopping1, styles.timeClr]}>Shopping</Text>
            <Text style={styles.march2021820}>7 march 2021, 3:00 PM</Text>
          </View>
          <Text style={[styles.text, styles.textTypo]}>-KSH.600</Text>
          <Image
            style={[styles.shoppingIcon, styles.sportsLayout]}
            resizeMode="cover"
            source={require("../assets/shopping-icon.png")}
          />
          <Image
            style={styles.smallArrow3}
            resizeMode="cover"
            source={require("../assets/small-arrow-3.png")}
          />
        </View>
        <View style={[styles.travel, styles.sportsLayout]}>
          <View style={[styles.shoppingDetails2, styles.shoppingPosition]}>
            <Text style={[styles.shopping1, styles.timeClr]}>Travel</Text>
            <Text style={styles.march2021820}>7 march 2021, 12:10 PM</Text>
          </View>
          <Text style={[styles.text, styles.textTypo]}>-KSH.350</Text>
          <Image
            style={[styles.shoppingIcon, styles.sportsLayout]}
            resizeMode="cover"
            source={require("../assets/shopping-icon1.png")}
          />
          <Image
            style={[styles.travel1Icon, styles.travel1IconLayout]}
            resizeMode="cover"
            source={require("../assets/travel-1.png")}
          />
          <Image
            style={styles.smallArrow3}
            resizeMode="cover"
            source={require("../assets/small-arrow-3.png")}
          />
        </View>
        <View style={[styles.medicine, styles.sportsLayout]}>
          <View style={[styles.shoppingDetails3, styles.shoppingPosition]}>
            <Text style={[styles.shopping1, styles.timeClr]}>Medicine</Text>
            <Text style={styles.march2021820}>13 march 2021, 6:50 AM</Text>
          </View>
          <Text style={[styles.text, styles.textTypo]}>-KSH.80.96</Text>
          <Image
            style={[styles.shoppingIcon, styles.sportsLayout]}
            resizeMode="cover"
            source={require("../assets/shopping-icon2.png")}
          />
          <Image
            style={styles.smallArrow3}
            resizeMode="cover"
            source={require("../assets/small-arrow-3.png")}
          />
          <Image
            style={[styles.travel1Icon, styles.travel1IconLayout]}
            resizeMode="cover"
            source={require("../assets/medicine-1.png")}
          />
        </View>
        <View style={[styles.sports, styles.sportsLayout]}>
          <View style={[styles.shoppingDetails4, styles.shoppingPosition]}>
            <Text style={[styles.shopping1, styles.timeClr]}>Sports</Text>
            <Text style={styles.march2021820}>10 march 2021, 4:20 PM</Text>
          </View>
          <Text style={[styles.text, styles.textTypo]}>-KSH.99.99</Text>
          <Image
            style={[styles.shoppingIcon, styles.sportsLayout]}
            resizeMode="cover"
            source={require("../assets/shopping-icon3.png")}
          />
          <Image
            style={styles.smallArrow3}
            resizeMode="cover"
            source={require("../assets/small-arrow-3.png")}
          />
          <Image
            style={[styles.sport1Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/sport-1.png")}
          />
        </View>
        <View style={[styles.sports2]}>
          <View style={[ styles.shoppingPosition]}>
            <Text style={[styles.shopping1, styles.timeClr]}>Sports</Text>
            <Text style={styles.march2021820}>5 march 2021, 1:20 PM</Text>
          </View>
          <Text style={[styles.text, styles.textTypo]}>-KSH.299.37</Text>
          <Image
            style={[styles.shoppingIcon, styles.sportsLayout]}
            resizeMode="cover"
            source={require("../assets/shopping-icon3.png")}
          />
          <Image
            style={styles.smallArrow3}
            resizeMode="cover"
            source={require("../assets/small-arrow-3.png")}
          />
          <Image
            style={[styles.sport1Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/sport-1.png")}
          />
        </View>
      </View>
      
      <View style={[styles.navigationBar, styles.travel1IconLayout]}>
        <Text style={[styles.transactions2, styles.text6FlexBox]}>
       Expense History 
        </Text>
        <Image
          style={[styles.navArrow2Icon, styles.timePosition]}
          resizeMode="cover"
          source={require("../assets/navarrow-2.png")}
        />
      </View>
      <Text style={[styles.yourTotalExpenses, styles.text6FlexBox]}>
        Your total Income used:
      </Text>
      <Text style={[styles.text6, styles.text6FlexBox]}>KSH.1063.30</Text>
     
      <View style={[styles.searchBar, styles.searchLayout]}>
        <View style={[styles.searchBarChild, styles.searchLayout]} />
        <Text style={[styles.search, styles.text6FlexBox]}>Search</Text>
        <Image
          style={[styles.search1Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/search-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  transactionsLayout: {
    height: 245,
    width: 375,
    left: 0,
    position: "absolute",
  },
  sportsLayout: {
    height: 48,
    position: "absolute",
  },
  shoppingPosition: {
    height: 39,
    left: 56,
    top: 5,
    position: "absolute",
  },
  timeClr: {
    color: Color.colorWhite,
    textAlign: "left",
  },
  textTypo: {
    textAlign: "right",
    fontSize: FontSize.size_sm,
    top: 16,
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratRegular,
    position: "absolute",
  },
  travel1IconLayout: {
    height: 24,
    position: "absolute",
  },
  iconPosition: {
    top: 16,
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  timePosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  text6FlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  searchLayout: {
    height: 53,
    width: 315,
    position: "absolute",
  },
  transactionsChild: {
    top: 5,
    height: 245,
    margin:5,
  },
  transactionsItem: {
    top: -5,
    margin:5,
    
  },
  transactionsInner: {
    top: 271,
    height: 541,
    width: 375,
    left: 0,
    position: "absolute",
     margin:5,
  },
  shopping1: {
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_base,
    top: 0,
    left: 0,
    position: "absolute",
  },
  march2021820: {
    top: 24,
    fontSize: FontSize.size_xs,
    color: Color.colorSkyblue_100,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    left: 0,
    position: "absolute",
  },
  shoppingDetails: {
    width: 137,
  },
  text: {
    left: 230,
  },
  shoppingIcon: {
    width: 48,
    top: 0,
    left: 0,
  },
  smallArrow3: {
    top: 18,
    left: 320,
    width: 7,
    height: 12,
    position: "absolute",
    overflow: "hidden",
  },
  shopping: {
    width: 327,
    height: 48,
    left: 1,
    top: 0,
  },
  shoppingDetails1: {
    width: 133,
  },
  text1: {
    left: 263,
  },
  shopping2: {
    top: 192,
    width: 327,
    height: 48,
    left: 1,
  },
  shoppingDetails2: {
    width: 134,
  },
  text2: {
    left: 265,
  },
  travel1Icon: {
    top: 12,
    left: 12,
    width: 24,
    overflow: "hidden",
  },
  travel: {
    top: 256,
    width: 327,
    height: 48,
    left: 0,
  },
  shoppingDetails3: {
    width: 136,
  },
  text3: {
    left: 252,
  },
  medicine: {
    top: 64,
    width: 327,
    height: 48,
    left: 0,
  },
  shoppingDetails4: {
    width: 138,
  },
  text4: {
    left: 253,
  },
  sport1Icon: {
    left: 10,
    width: 28,
    height: 16,
  },
  sports: {
    top: 128,
    width: 327,
    height: 48,
    left: 0,
  },
  shoppingDetails5: {
    width: 129,
  },
  text5: {
    left: 246,
  },
  sports2: {
    top: 320,
    width: 327,
    height: 48,
    left: 1,
  },
  transactions1: {
    top: 392,
    width: 328,
    height: 368,
    left: 31,
    position: "absolute",
  },
  batteryIcon: {
    height: "62.96%",
    width: "7.41%",
    top: "24.07%",
    right: "0%",
    bottom: "12.96%",
    left: "92.59%",
    position: "absolute",
  },
 
  time: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    color: Color.colorWhite,
  },
  barsStatusBarIphoneX: {
    width: "8.84%",
    right: "91.16%",
    bottom: "0%",
    height: "100%",
    left: "0%",
  },
  barsStatusBarIphoneD: {
    height: "40.91%",
    width: "87.28%",
    top: "29.55%",
    right: "4.08%",
    bottom: "29.55%",
    left: "8.64%",
    position: "absolute",
  },
  dark1: {
    width: 376,
    height: 44,
    top: 0,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  transactions2: {
    left: "50.89%",
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.sFProText,
    textAlign: "center",
    fontWeight: "700",
    color: Color.colorWhite,
    top: "0%",
  },
  navArrow2Icon: {
    width: "11.27%",
    right: "88.73%",
    bottom: "0%",
    height: "100%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  navigationBar: {
    top: 25,
    left: 30,
    width: 213,
  },
  yourTotalExpenses: {
    top: 90,
    left: 100,
    fontSize: FontSize.size_3xl,
    color: Color.colorPaleturquoise,
    fontFamily: FontFamily.montserratRegular,
  },
  text6: {
    top: 130,
    left: 124,
    fontSize: FontSize.size_9xl,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "800",
    color: Color.colorWhite,
  },
  rectanglePressable: {
   top: 195,
    left: 100,
    fontWeight: "700",
    fontSize: FontSize.size_9xl,
    color:Color.colorDarkblue,
    fontFamily: FontFamily.montserratRegular,
  },
  searchBarChild: {
    borderRadius: Border.br_41xl,
    backgroundColor: Color.colorDarkblue,
    top: 0,
    left: 0,
  },
  search: {
    top: 17,
    left: 45,
    color: Color.colorMediumslateblue_100,
    fontFamily: FontFamily.sFProText,
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
  search1Icon: {
    left: 15,
    width: 22,
    height: 21,
  },
  searchBar: {
    top: 315,
    left: 31,
  },
  transactions: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Transactions;
