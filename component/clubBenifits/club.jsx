import React from "react";

import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";

import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Symbol,
  Defs,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from "react-native-svg";
import { View, ImageBackground, Button, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "react-native-paper";
import Loading from "../screens/Loading";
import { useQuery } from "graphql-hooks";
import { Dimensions } from "react-native";
import Toast from "react-native-root-toast";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import moment from "moment";
import Header2 from "../shared/header2";
var width = Dimensions.get("window").width;

const Club = ({ navigation }) => {
  const { colors } = useTheme();
  const HOMEPAGE_QUERY = `query Query {
  
      getMontlySpotlight {
        id
        img
        offer
        description
        date
      
    }
  }`;

  return (
    <View style={{ flex: 1, backgroundColor: colors.borderColor }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerStyle}>
          <View style={styles.center}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ClubView", {
                  name: "Travel Concierge",
                  data: {
                    img: "https://globe-trotte.fra1.digitaloceanspaces.com/20220404-wzhsx-bulk",
                    name: "Travel Concierge",
                    para: "Experience white glove customer service and recommendations, no matter what corner of the globe.",
                  },
                })
              }
              style={styles.box}
            >
              <ImageBackground
                style={styles.logo}
                resizeMode="cover"
                source={{
                  uri: "https://globe-trotte.fra1.digitaloceanspaces.com/20220404-wzhsx-bulk",
                }}
              >
                <LinearGradient
                  // Background Linear Gradient
                  colors={["transparent", "#000000"]}
                  style={styles.logo}
                >
                  <Svg
                    style={{ marginBottom: 20 }}
                    width="67"
                    height="60"
                    viewBox="0 0 67 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <Path
                      d="M19.43 37.3333V16.6667H6.7C3.015 16.6667 0 19.6667 0 23.3333V43.3333C0 47 3.015 50 6.7 50H10.05V60L20.1 50H36.85C40.535 50 43.55 47 43.55 43.3333V37.2667C43.3298 37.3137 43.1052 37.3372 42.88 37.3367H19.43V37.3333ZM60.3 0H30.15C26.465 0 23.45 3 23.45 6.66667V33.3333H46.9L56.95 43.3333V33.3333H60.3C63.985 33.3333 67 30.3367 67 26.6667V6.66667C67 3 63.985 0 60.3 0Z"
                      fill="#FEA20B"
                    />
                  </Svg>
                  <View style={styles.bottom}>
                    <Text
                      style={{
                        fontSize: 17,
                        fontFamily: "Cushingstd",
                        textAlign: "center",
                        marginBottom: 2,
                      }}
                    >
                      Travel Concierge
                    </Text>
                    <Text
                      style={{
                        fontFamily: "BasisGrotesque",
                        textAlign: "center",
                      }}
                    >
                      Experience white glove customer service and
                      recommendations, no matter what corner of the globe.{" "}
                    </Text>
                  </View>
                </LinearGradient>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ClubView", {
                  name: "Priority Access",
                  data: {
                    img: "https://globe-trotte.fra1.digitaloceanspaces.com/20220404-inl1f-bulk",
                    name: "Priority Access",
                    para: "Receive priority access and invitations or Globe-Trotter events, promotions and new product releases.",
                  },
                })
              }
              style={styles.box}
            >
              <ImageBackground
                style={styles.logo}
                resizeMode="cover"
                source={{
                  uri: "https://globe-trotte.fra1.digitaloceanspaces.com/20220404-inl1f-bulk",
                }}
              >
                <LinearGradient
                  // Background Linear Gradient
                  colors={["transparent", "#000000"]}
                  style={styles.logo}
                >
                  <Svg
                    style={{ marginBottom: 20 }}
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <Path
                      d="M16.0312 0H16.2633C19.6277 0 22.7496 1.78348 24.4582 4.68809L27 9.01336L29.5418 4.68809C31.2504 1.78348 34.3723 0 37.7367 0H37.9688C43.0945 0 47.25 4.15547 47.25 9.28125C47.25 10.8 46.8809 12.1395 46.2375 13.5H50.625C52.4918 13.5 54 15.0082 54 16.875V23.625C54 25.4918 52.4918 27 50.625 27H3.375C1.51137 27 0 25.4918 0 23.625V16.875C0 15.0082 1.51137 13.5 3.375 13.5H7.7625C7.11492 12.1395 6.75 10.8 6.75 9.28125C6.75 4.15547 10.9055 0 16.0312 0ZM20.0918 7.25414C19.2902 5.89676 17.8348 5.0625 16.2633 5.0625H16.0312C13.7004 5.0625 11.8125 6.95145 11.8125 9.28125C11.8125 11.6121 13.7004 13.5 16.0312 13.5H23.7621L20.0918 7.25414ZM37.9688 5.0625H37.7367C36.1652 5.0625 34.7098 5.89676 33.9082 7.25414L30.2379 13.5H37.9688C40.2996 13.5 42.1875 11.6121 42.1875 9.28125C42.1875 6.95145 40.2996 5.0625 37.9688 5.0625ZM3.375 30.375H23.625V54H8.4375C5.64152 54 3.375 51.7324 3.375 48.9375V30.375ZM30.375 54V30.375H50.625V48.9375C50.625 51.7324 48.3574 54 45.5625 54H30.375Z"
                      fill="#FEA20B"
                    />
                  </Svg>

                  <View style={styles.bottom}>
                    <Text
                      style={{
                        fontSize: 17,
                        fontFamily: "Cushingstd",
                        textAlign: "center",
                      }}
                    >
                      Priority Access
                    </Text>
                    <Text
                      style={{
                        fontFamily: "BasisGrotesque",
                        textAlign: "center",
                      }}
                    >
                      Receive priority access and invitations or Globe-Trotter
                      events, promotions and new product releases.{" "}
                    </Text>
                  </View>
                </LinearGradient>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ClubView", {
                  name: "Repairs ",
                  data: {
                    img: "https://globe-trotte.fra1.digitaloceanspaces.com/20220404-4o6w4-bulk",
                    name: "Repairs",
                    para: "As a member, you’ll be eligible to receive free lifetime repairs on all your personal Globe-Trotter luggage.",
                  },
                })
              }
              style={styles.box}
            >
              <ImageBackground
                style={styles.logo}
                resizeMode="cover"
                source={{
                  uri: "https://globe-trotte.fra1.digitaloceanspaces.com/20220404-4o6w4-bulk",
                }}
              >
                <LinearGradient
                  // Background Linear Gradient
                  colors={["transparent", "#000000"]}
                  style={styles.logo}
                >
                  <Svg
                    style={{ marginBottom: 20 }}
                    width="46"
                    height="46"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <Path
                      d="M2.85967 0.00255321L0 2.86206L6.29127 11.6722C6.55612 12.0432 6.90584 12.3455 7.31125 12.5539C7.71667 12.7624 8.16604 12.8708 8.6219 12.8703H8.82207C9.19806 12.87 9.57042 12.9439 9.91783 13.0877C10.2652 13.2314 10.5809 13.4423 10.8467 13.7082L18.4963 21.3574L11.0126 28.9465C9.73257 28.5697 8.38238 28.4964 7.06909 28.7323C5.75581 28.9683 4.51557 29.5069 3.44675 30.3057C2.37794 31.1044 1.50996 32.1412 0.911672 33.3337C0.31338 34.5263 0.00123595 35.8419 0 37.1762C0.00171427 38.4056 0.267675 39.6203 0.779864 40.7379C1.29205 41.8556 2.0385 42.8501 2.96864 43.6541C3.89877 44.4581 4.99087 45.0528 6.17092 45.3979C7.35098 45.7429 8.59142 45.8304 9.80822 45.6542C11.025 45.4781 12.1897 45.0424 13.2235 44.3769C14.2572 43.7113 15.1358 42.8313 15.7997 41.7965C16.4636 40.7618 16.8973 39.5964 17.0715 38.3794C17.2456 37.1624 17.1562 35.9221 16.8091 34.7427L24.3987 27.2594L27.1668 30.0274L26.2946 32.641C26.127 33.1448 26.103 33.6852 26.2252 34.2019C26.3475 34.7185 26.6111 35.191 26.9867 35.5663L36.5837 45.1628C37.12 45.6988 37.8472 46 38.6055 46C39.3638 46 40.091 45.6988 40.6273 45.1628L45.1627 40.6276C45.6988 40.0914 46 39.3642 46 38.6059C46 37.8477 45.6988 37.1205 45.1627 36.5842L35.5657 26.9877C35.1904 26.6122 34.7179 26.3486 34.2012 26.2263C33.6846 26.1041 33.144 26.1281 32.6402 26.2957L30.0265 27.1679L27.2812 24.4228L34.9451 16.8651C36.2165 17.2044 37.5488 17.2473 38.8394 16.9904C40.13 16.7334 41.3443 16.1835 42.3887 15.3831C43.4331 14.5827 44.2798 13.5532 44.8634 12.3738C45.447 11.1945 45.7519 9.89689 45.7547 8.58108C45.7547 7.81187 45.6546 7.06554 45.463 6.35924L39.3433 12.4815L34.316 11.4406L33.2751 6.41643L39.3976 0.294223C37.9412 -0.0973544 36.4072 -0.0980853 34.9504 0.292104C33.4936 0.682293 32.1654 1.44961 31.0997 2.51672C30.034 3.58382 29.2684 4.913 28.8802 6.37026C28.492 7.82753 28.4948 9.36138 28.8884 10.8172L21.3388 18.475L13.7064 10.8487C13.1701 10.3125 12.8687 9.58532 12.8685 8.827V8.62397C12.8685 8.16862 12.7598 7.71985 12.5514 7.31499C12.343 6.91013 12.0409 6.56089 11.6703 6.29633L2.85967 0.00255321ZM30.444 30.4449C30.5768 30.3117 30.7346 30.2061 30.9083 30.134C31.082 30.0619 31.2683 30.0248 31.4563 30.0248C31.6444 30.0248 31.8306 30.0619 32.0043 30.134C32.1781 30.2061 32.3358 30.3117 32.4687 30.4449L41.0477 39.0234C41.1806 39.1563 41.2861 39.3142 41.358 39.4878C41.43 39.6615 41.467 39.8477 41.467 40.0357C41.467 40.2237 41.43 40.4098 41.358 40.5835C41.2861 40.7572 41.1806 40.915 41.0477 41.0479C40.9147 41.1809 40.7569 41.2863 40.5832 41.3583C40.4095 41.4302 40.2233 41.4672 40.0353 41.4672C39.8473 41.4672 39.6612 41.4302 39.4875 41.3583C39.3138 41.2863 39.156 41.1809 39.023 41.0479L30.444 32.4694C30.3109 32.3366 30.2052 32.1788 30.1331 32.0051C30.0611 31.8314 30.024 31.6452 30.024 31.4571C30.024 31.2691 30.0611 31.0829 30.1331 30.9092C30.2052 30.7355 30.3109 30.5777 30.444 30.4449ZM8.579 31.4571L9.92591 32.1491L11.4387 32.2235L12.2594 33.496L13.5319 34.3167L13.6063 35.8293L14.2983 37.1762L13.6063 38.523L13.5319 40.0357L12.2594 40.8564L11.4387 42.1288L9.92591 42.2032L8.579 42.8952L7.2321 42.2032L5.71933 42.1288L4.89861 40.8564L3.62606 40.0357L3.55171 38.523L2.85967 37.1762L3.55171 35.8293L3.62606 34.3167L4.89861 33.496L5.71933 32.2235L7.2321 32.1491L8.579 31.4571Z"
                      fill="#FEA20B"
                    />
                  </Svg>
                  <View style={styles.bottom}>
                    <Text
                      style={{
                        fontSize: 17,
                        fontFamily: "Cushingstd",
                        textAlign: "center",
                        marginBottom: 2,
                      }}
                    >
                      Repairs{" "}
                    </Text>
                    <Text
                      style={{
                        fontFamily: "BasisGrotesque",
                        textAlign: "center",
                      }}
                    >
                      As a member, you’ll be eligible to receive free lifetime
                      repairs on all your personal Globe-Trotter luggage.
                    </Text>
                  </View>
                </LinearGradient>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ClubView", {
                  name: "Repairs ",
                  data: {
                    img: "https://globe-trotte.fra1.digitaloceanspaces.com/20220404-4o6w4-bulk",
                    name: "Repairs",
                    para: "As a member, you’ll be eligible to receive free lifetime repairs on all your personal Globe-Trotter luggage.",
                  },
                })
              }
              style={styles.box}
            >
              <ImageBackground
                style={styles.logo}
                resizeMode="cover"
                source={{
                  uri: "https://globe-trotte.fra1.digitaloceanspaces.com/20220404-4o6w4-bulk",
                }}
              >
                <LinearGradient
                  // Background Linear Gradient
                  colors={["transparent", "#000000"]}
                  style={styles.logo}
                >
                  <Svg
                    style={{ marginBottom: 20 }}
                    width="46"
                    height="46"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <Path
                      d="M2.85967 0.00255321L0 2.86206L6.29127 11.6722C6.55612 12.0432 6.90584 12.3455 7.31125 12.5539C7.71667 12.7624 8.16604 12.8708 8.6219 12.8703H8.82207C9.19806 12.87 9.57042 12.9439 9.91783 13.0877C10.2652 13.2314 10.5809 13.4423 10.8467 13.7082L18.4963 21.3574L11.0126 28.9465C9.73257 28.5697 8.38238 28.4964 7.06909 28.7323C5.75581 28.9683 4.51557 29.5069 3.44675 30.3057C2.37794 31.1044 1.50996 32.1412 0.911672 33.3337C0.31338 34.5263 0.00123595 35.8419 0 37.1762C0.00171427 38.4056 0.267675 39.6203 0.779864 40.7379C1.29205 41.8556 2.0385 42.8501 2.96864 43.6541C3.89877 44.4581 4.99087 45.0528 6.17092 45.3979C7.35098 45.7429 8.59142 45.8304 9.80822 45.6542C11.025 45.4781 12.1897 45.0424 13.2235 44.3769C14.2572 43.7113 15.1358 42.8313 15.7997 41.7965C16.4636 40.7618 16.8973 39.5964 17.0715 38.3794C17.2456 37.1624 17.1562 35.9221 16.8091 34.7427L24.3987 27.2594L27.1668 30.0274L26.2946 32.641C26.127 33.1448 26.103 33.6852 26.2252 34.2019C26.3475 34.7185 26.6111 35.191 26.9867 35.5663L36.5837 45.1628C37.12 45.6988 37.8472 46 38.6055 46C39.3638 46 40.091 45.6988 40.6273 45.1628L45.1627 40.6276C45.6988 40.0914 46 39.3642 46 38.6059C46 37.8477 45.6988 37.1205 45.1627 36.5842L35.5657 26.9877C35.1904 26.6122 34.7179 26.3486 34.2012 26.2263C33.6846 26.1041 33.144 26.1281 32.6402 26.2957L30.0265 27.1679L27.2812 24.4228L34.9451 16.8651C36.2165 17.2044 37.5488 17.2473 38.8394 16.9904C40.13 16.7334 41.3443 16.1835 42.3887 15.3831C43.4331 14.5827 44.2798 13.5532 44.8634 12.3738C45.447 11.1945 45.7519 9.89689 45.7547 8.58108C45.7547 7.81187 45.6546 7.06554 45.463 6.35924L39.3433 12.4815L34.316 11.4406L33.2751 6.41643L39.3976 0.294223C37.9412 -0.0973544 36.4072 -0.0980853 34.9504 0.292104C33.4936 0.682293 32.1654 1.44961 31.0997 2.51672C30.034 3.58382 29.2684 4.913 28.8802 6.37026C28.492 7.82753 28.4948 9.36138 28.8884 10.8172L21.3388 18.475L13.7064 10.8487C13.1701 10.3125 12.8687 9.58532 12.8685 8.827V8.62397C12.8685 8.16862 12.7598 7.71985 12.5514 7.31499C12.343 6.91013 12.0409 6.56089 11.6703 6.29633L2.85967 0.00255321ZM30.444 30.4449C30.5768 30.3117 30.7346 30.2061 30.9083 30.134C31.082 30.0619 31.2683 30.0248 31.4563 30.0248C31.6444 30.0248 31.8306 30.0619 32.0043 30.134C32.1781 30.2061 32.3358 30.3117 32.4687 30.4449L41.0477 39.0234C41.1806 39.1563 41.2861 39.3142 41.358 39.4878C41.43 39.6615 41.467 39.8477 41.467 40.0357C41.467 40.2237 41.43 40.4098 41.358 40.5835C41.2861 40.7572 41.1806 40.915 41.0477 41.0479C40.9147 41.1809 40.7569 41.2863 40.5832 41.3583C40.4095 41.4302 40.2233 41.4672 40.0353 41.4672C39.8473 41.4672 39.6612 41.4302 39.4875 41.3583C39.3138 41.2863 39.156 41.1809 39.023 41.0479L30.444 32.4694C30.3109 32.3366 30.2052 32.1788 30.1331 32.0051C30.0611 31.8314 30.024 31.6452 30.024 31.4571C30.024 31.2691 30.0611 31.0829 30.1331 30.9092C30.2052 30.7355 30.3109 30.5777 30.444 30.4449ZM8.579 31.4571L9.92591 32.1491L11.4387 32.2235L12.2594 33.496L13.5319 34.3167L13.6063 35.8293L14.2983 37.1762L13.6063 38.523L13.5319 40.0357L12.2594 40.8564L11.4387 42.1288L9.92591 42.2032L8.579 42.8952L7.2321 42.2032L5.71933 42.1288L4.89861 40.8564L3.62606 40.0357L3.55171 38.523L2.85967 37.1762L3.55171 35.8293L3.62606 34.3167L4.89861 33.496L5.71933 32.2235L7.2321 32.1491L8.579 31.4571Z"
                      fill="#FEA20B"
                    />
                  </Svg>
                  <View style={styles.bottom}>
                    <Text
                      style={{
                        fontSize: 17,
                        fontFamily: "Cushingstd",
                        textAlign: "center",
                        marginBottom: 2,
                      }}
                    >
                      Repairs{" "}
                    </Text>
                    <Text
                      style={{
                        fontFamily: "BasisGrotesque",
                        textAlign: "center",
                      }}
                    >
                      As a member, you’ll be eligible to receive free lifetime
                      repairs on all your personal Globe-Trotter luggage.
                    </Text>
                  </View>
                </LinearGradient>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ClubView", {
                  name: "Rental",
                  data: {
                    img: "https://globe-trotte.fra1.digitaloceanspaces.com/20220404-inl1f-bulk",
                    name: "Rental",
                    para: "For the first time ever, as a member of the Globe-Trotter club you will be able to rent our Centenary case in an exclusive colourway of Indigo-Brow",
                  },
                })
              }
              style={styles.box}
            >
              <ImageBackground
                style={styles.logo}
                resizeMode="cover"
                source={{
                  uri: "https://globe-trotte.fra1.digitaloceanspaces.com/20220404-inl1f-bulk",
                }}
              >
                <LinearGradient
                  // Background Linear Gradient
                  colors={["transparent", "#000000"]}
                  style={styles.logo}
                >
                  <Svg
                    style={{ marginBottom: 20 }}
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <Path
                      d="M16.0312 0H16.2633C19.6277 0 22.7496 1.78348 24.4582 4.68809L27 9.01336L29.5418 4.68809C31.2504 1.78348 34.3723 0 37.7367 0H37.9688C43.0945 0 47.25 4.15547 47.25 9.28125C47.25 10.8 46.8809 12.1395 46.2375 13.5H50.625C52.4918 13.5 54 15.0082 54 16.875V23.625C54 25.4918 52.4918 27 50.625 27H3.375C1.51137 27 0 25.4918 0 23.625V16.875C0 15.0082 1.51137 13.5 3.375 13.5H7.7625C7.11492 12.1395 6.75 10.8 6.75 9.28125C6.75 4.15547 10.9055 0 16.0312 0ZM20.0918 7.25414C19.2902 5.89676 17.8348 5.0625 16.2633 5.0625H16.0312C13.7004 5.0625 11.8125 6.95145 11.8125 9.28125C11.8125 11.6121 13.7004 13.5 16.0312 13.5H23.7621L20.0918 7.25414ZM37.9688 5.0625H37.7367C36.1652 5.0625 34.7098 5.89676 33.9082 7.25414L30.2379 13.5H37.9688C40.2996 13.5 42.1875 11.6121 42.1875 9.28125C42.1875 6.95145 40.2996 5.0625 37.9688 5.0625ZM3.375 30.375H23.625V54H8.4375C5.64152 54 3.375 51.7324 3.375 48.9375V30.375ZM30.375 54V30.375H50.625V48.9375C50.625 51.7324 48.3574 54 45.5625 54H30.375Z"
                      fill="#FEA20B"
                    />
                  </Svg>

                  <View style={styles.bottom}>
                    <Text
                      style={{
                        fontSize: 17,
                        fontFamily: "Cushingstd",
                        textAlign: "center",
                      }}
                    >
                      Rental
                    </Text>
                    <Text
                      style={{
                        fontFamily: "BasisGrotesque",
                        textAlign: "center",
                      }}
                    >
                      For the first time ever, as a member of the Globe-Trotter
                      club you will be able to rent our Centenary case in an
                      exclusive colourway of Indigo-Brown.
                    </Text>
                  </View>
                </LinearGradient>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  center: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    marginBottom: 150,
  },
  logo: {
    borderColor: "white",
    width: "100%",
    height: 170,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#ffffff",
  },
  layer: {
    height: "25%",
    width: "100%",

    alignItems: "center",
    textAlign: "center",

    justifyContent: "center",
  },
  text: {
    marginBottom: 1,
    height: "60%",
    width: "90%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "flex-end",
    textAlign: "right",

    justifyContent: "flex-start",
  },
  stretch: {
    width: "100%",
    height: 230,
    resizeMode: "stretch",
  },
  box: {
    width: width,

    height: 200,
    shadowColor: "#000000",

    alignItems: "center",
    textAlign: "center",

    justifyContent: "space-evenly",
  },
  container: {
    flex: 1,
  },

  bottom: {
    width: "80%",
    height: 60,
  },
  logo: {
    width: "100%",
    height: "100%",

    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Club;
