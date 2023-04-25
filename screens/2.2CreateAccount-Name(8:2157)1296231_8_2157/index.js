import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_48_2571}>
        <View style={styles.View_I48_2571_48_2541} />
        <View style={styles.View_I48_2571_48_2536}>
          <Text style={styles.Text_I48_2571_48_2536}>Nadia Lipsh|</Text>
        </View>
      </View>
      <View style={styles.View_48_2616}>
        <View style={styles.View_I48_2616_48_2601} />
        <View style={styles.View_I48_2616_48_2609}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/02d9a21a-8edd-4b22-b79b-76b3d23f64e7"
            }}
            style={styles.ImageBackground_I48_2616_48_2609_48_638}
          />
        </View>
      </View>
      <View style={styles.View_49_882}>
        <View style={styles.View_I49_882_49_852}>
          <View style={styles.View_I49_882_49_853} />
          <View style={styles.View_I49_882_49_854} />
        </View>
        <View style={styles.View_I49_882_49_855}>
          <Text style={styles.Text_I49_882_49_855}>1/5</Text>
        </View>
      </View>
      <View style={styles.View_59_4063}>
        <View source={{ uri: "null" }} style={styles.View_I59_4063_51_2684} />
        <View style={styles.View_I59_4063_51_2685}>
          <View style={styles.View_I59_4063_51_2686} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d04c0aa-1e73-4ab6-8d00-7c23e358e557"
            }}
            style={styles.ImageBackground_I59_4063_51_2687}
          />
        </View>
        <View style={styles.View_I59_4063_51_2688}>
          <View style={styles.View_I59_4063_51_2688_48_1834}>
            <View style={styles.View_I59_4063_51_2688_48_1835} />
            <View style={styles.View_I59_4063_51_2688_48_1836}>
              <View style={styles.View_I59_4063_51_2688_48_1837} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/589fc83b-3ab3-4d08-aab7-bff2ce497ac0"
                }}
                style={styles.ImageBackground_I59_4063_51_2688_48_1838}
              />
              <View style={styles.View_I59_4063_51_2688_48_1839} />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b98210a5-633a-4db4-abdc-845cb310ca49"
              }}
              style={styles.ImageBackground_I59_4063_51_2688_48_1840}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/238d643a-76f8-4f52-9bbd-9e1762b6ac47"
              }}
              style={styles.ImageBackground_I59_4063_51_2688_48_1844}
            />
            <View style={styles.View_I59_4063_51_2688_48_1849}>
              <View style={styles.View_I59_4063_51_2688_48_1850}>
                <Text style={styles.Text_I59_4063_51_2688_48_1850}>9:41</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_8_2326}>
        <Text style={styles.Text_8_2326}>What’s your name?</Text>
      </View>
      <View style={styles.View_48_2625}>
        <View style={styles.View_I48_2625_48_1633}>
          <View style={styles.View_I48_2625_48_1634} />
        </View>
        <View style={styles.View_I48_2625_48_1635}>
          <View style={styles.View_I48_2625_48_1636}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e2619b17-4366-45d5-bc68-dd0ab02c632b"
              }}
              style={styles.ImageBackground_I48_2625_48_1637}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/139850f6-9202-4916-821d-8ccfc20b77c4"
              }}
              style={styles.ImageBackground_I48_2625_48_1643}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/433efb31-b308-4911-b4ef-45b32a788dbc"
              }}
              style={styles.ImageBackground_I48_2625_48_1644}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e038d72f-e914-4513-bc97-43a69c0ee6ea"
            }}
            style={styles.ImageBackground_I48_2625_48_1645}
          />
          <View style={styles.View_I48_2625_48_1652}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/58a1fe00-ecc7-43d2-a82c-3165a5b31ba9"
              }}
              style={styles.ImageBackground_I48_2625_48_1653}
            />
            <View style={styles.View_I48_2625_48_1654}>
              <Text style={styles.Text_I48_2625_48_1654}>Go</Text>
            </View>
          </View>
          <View style={styles.View_I48_2625_48_1655}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55e1ed55-8973-446b-bfe0-3157455dd9c2"
              }}
              style={styles.ImageBackground_I48_2625_48_1656}
            />
            <View style={styles.View_I48_2625_48_1657}>
              <Text style={styles.Text_I48_2625_48_1657}>space</Text>
            </View>
          </View>
          <View style={styles.View_I48_2625_48_1658}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b0f100c9-e9c9-439d-9eed-c0e202358408"
              }}
              style={styles.ImageBackground_I48_2625_48_1659}
            />
            <View style={styles.View_I48_2625_48_1660}>
              <Text style={styles.Text_I48_2625_48_1660}>123</Text>
            </View>
          </View>
          <View style={styles.View_I48_2625_48_1661}>
            <View style={styles.View_I48_2625_48_1662}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/beecd132-a781-44b4-af60-7952898dc4d2"
                }}
                style={styles.ImageBackground_I48_2625_48_1663}
              />
              <View style={styles.View_I48_2625_48_1664}>
                <Text style={styles.Text_I48_2625_48_1664}> </Text>
              </View>
            </View>
            <View style={styles.View_I48_2625_48_1665}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4228584c-5018-450d-95e2-032f3e581f9b"
                }}
                style={styles.ImageBackground_I48_2625_48_1666}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fed599d1-1360-4a00-800f-8e1fe7a8a284"
                }}
                style={styles.ImageBackground_I48_2625_48_1669}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eac5fd18-df97-44fe-adf9-41f433f68e4a"
                }}
                style={styles.ImageBackground_I48_2625_48_1670}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/919008af-d7f1-490e-b6d6-4a87115e1cb8"
                }}
                style={styles.ImageBackground_I48_2625_48_1671}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4dba2b25-627e-45b0-b2c4-7e6032a57875"
                }}
                style={styles.ImageBackground_I48_2625_48_1672}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4e533a2d-0a0d-4fcd-888a-a7218ad5d3ca"
                }}
                style={styles.ImageBackground_I48_2625_48_1673}
              />
            </View>
          </View>
          <View style={styles.View_I48_2625_48_1674}>
            <View style={styles.View_I48_2625_48_1675}>
              <View style={styles.View_I48_2625_48_1676} />
              <View style={styles.View_I48_2625_48_1677}>
                <Text style={styles.Text_I48_2625_48_1677}> </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/468e10c3-c672-42a6-81aa-a5a5e6bda279"
              }}
              style={styles.ImageBackground_I48_2625_48_1678}
            />
          </View>
          <View style={styles.View_I48_2625_48_1679}>
            <View style={styles.View_I48_2625_48_1680} />
            <View style={styles.View_I48_2625_48_1681}>
              <Text style={styles.Text_I48_2625_48_1681}>M</Text>
            </View>
          </View>
          <View style={styles.View_I48_2625_48_1682}>
            <View style={styles.View_I48_2625_48_1683} />
            <View style={styles.View_I48_2625_48_1684}>
              <Text style={styles.Text_I48_2625_48_1684}>N</Text>
            </View>
          </View>
          <View style={styles.View_I48_2625_48_1685}>
            <View style={styles.View_I48_2625_48_1686} />
            <View style={styles.View_I48_2625_48_1687}>
              <Text style={styles.Text_I48_2625_48_1687}>B</Text>
            </View>
          </View>
          <View style={styles.View_I48_2625_48_1688}>
            <View style={styles.View_I48_2625_48_1689} />
            <View style={styles.View_I48_2625_48_1690}>
              <Text style={styles.Text_I48_2625_48_1690}>V</Text>
            </View>
          </View>
          <View style={styles.View_I48_2625_48_1691}>
            <View style={styles.View_I48_2625_48_1692} />
            <View style={styles.View_I48_2625_48_1693}>
              <Text style={styles.Text_I48_2625_48_1693}>C</Text>
            </View>
          </View>
          <View style={styles.View_I48_2625_48_1694}>
            <View style={styles.View_I48_2625_48_1695} />
            <View style={styles.View_I48_2625_48_1696}>
              <Text style={styles.Text_I48_2625_48_1696}>X</Text>
            </View>
          </View>
          <View style={styles.View_I48_2625_48_1697}>
            <View style={styles.View_I48_2625_48_1698} />
            <View style={styles.View_I48_2625_48_1699}>
              <Text style={styles.Text_I48_2625_48_1699}>Z</Text>
            </View>
          </View>
          <View style={styles.View_I48_2625_48_1700}>
            <View style={styles.View_I48_2625_48_1701} />
            <View style={styles.View_I48_2625_48_1702}>
              <Text style={styles.Text_I48_2625_48_1702}>L</Text>
            </View>
          </View>
          <View style={styles.View_I48_2625_48_1703}>
            <View style={styles.View_I48_2625_48_1704} />
            <View style={styles.View_I48_2625_48_1705}>
              <Text style={styles.Text_I48_2625_48_1705}>K</Text>
            </View>
          </View>
          <View style={styles.View_I48_2625_48_1706}>
            <View style={styles.View_I48_2625_48_1707} />
            <View style={styles.View_I48_2625_48_1708}>
              <Text style={styles.Text_I48_2625_48_1708}>J</Text>
            </View>
          </View>
          <View style={styles.View_I48_2625_48_1709}>
            <View style={styles.View_I48_2625_48_1710} />
            <View style={styles.View_I48_2625_48_1711}>
              <Text style={styles.Text_I48_2625_48_1711}>H</Text>
            </View>
          </View>
          <View style={styles.View_I48_2625_48_1712}>
            <View style={styles.View_I48_2625_48_1713} />
            <View style={styles.View_I48_2625_48_1714}>
              <Text style={styles.Text_I48_2625_48_1714}>G</Text>
            </View>
          </View>
          <View style={styles.View_I48_2625_48_1715}>
            <View style={styles.View_I48_2625_48_1716} />
            <View style={styles.View_I48_2625_48_1717}>
              <Text style={styles.Text_I48_2625_48_1717}>F</Text>
            </View>
          </View>
          <View style={styles.View_I48_2625_48_1718}>
            <View style={styles.View_I48_2625_48_1719} />
            <View style={styles.View_I48_2625_48_1720}>
              <Text style={styles.Text_I48_2625_48_1720}>D</Text>
            </View>
          </View>
          <View style={styles.View_I48_2625_48_1721}>
            <View style={styles.View_I48_2625_48_1722} />
            <View style={styles.View_I48_2625_48_1723}>
              <Text style={styles.Text_I48_2625_48_1723}>S</Text>
            </View>
          </View>
          <View style={styles.View_I48_2625_48_1724}>
            <View style={styles.View_I48_2625_48_1725} />
            <View style={styles.View_I48_2625_48_1726}>
              <Text style={styles.Text_I48_2625_48_1726}>A</Text>
            </View>
          </View>
          <View style={styles.View_I48_2625_48_1727}>
            <View style={styles.View_I48_2625_48_1728} />
            <View style={styles.View_I48_2625_48_1729}>
              <Text style={styles.Text_I48_2625_48_1729}>P</Text>
            </View>
          </View>
          <View style={styles.View_I48_2625_48_1730}>
            <View style={styles.View_I48_2625_48_1731} />
            <View style={styles.View_I48_2625_48_1732}>
              <Text style={styles.Text_I48_2625_48_1732}>O</Text>
            </View>
          </View>
          <View style={styles.View_I48_2625_48_1733}>
            <View style={styles.View_I48_2625_48_1734} />
            <View style={styles.View_I48_2625_48_1735}>
              <Text style={styles.Text_I48_2625_48_1735}>I</Text>
            </View>
          </View>
          <View style={styles.View_I48_2625_48_1736}>
            <View style={styles.View_I48_2625_48_1737} />
            <View style={styles.View_I48_2625_48_1738}>
              <Text style={styles.Text_I48_2625_48_1738}>U</Text>
            </View>
          </View>
          <View style={styles.View_I48_2625_48_1739}>
            <View style={styles.View_I48_2625_48_1740} />
            <View style={styles.View_I48_2625_48_1741}>
              <Text style={styles.Text_I48_2625_48_1741}>Y</Text>
            </View>
          </View>
          <View style={styles.View_I48_2625_48_1742}>
            <View style={styles.View_I48_2625_48_1743} />
            <View style={styles.View_I48_2625_48_1744}>
              <Text style={styles.Text_I48_2625_48_1744}>T</Text>
            </View>
          </View>
          <View style={styles.View_I48_2625_48_1745}>
            <View style={styles.View_I48_2625_48_1746} />
            <View style={styles.View_I48_2625_48_1747}>
              <Text style={styles.Text_I48_2625_48_1747}>R</Text>
            </View>
          </View>
          <View style={styles.View_I48_2625_48_1748}>
            <View style={styles.View_I48_2625_48_1749} />
            <View style={styles.View_I48_2625_48_1750}>
              <Text style={styles.Text_I48_2625_48_1750}>E</Text>
            </View>
          </View>
          <View style={styles.View_I48_2625_48_1751}>
            <View style={styles.View_I48_2625_48_1752} />
            <View style={styles.View_I48_2625_48_1753}>
              <Text style={styles.Text_I48_2625_48_1753}>W</Text>
            </View>
          </View>
          <View style={styles.View_I48_2625_48_1754}>
            <View style={styles.View_I48_2625_48_1755} />
            <View style={styles.View_I48_2625_48_1756}>
              <Text style={styles.Text_I48_2625_48_1756}>Q</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 249, 242, 1)" },
  View_2: { height: hp("111%") },
  View_48_2571: {
    width: wp("87%"),
    height: hp("8%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I48_2571_48_2541: {
    flexGrow: 1,
    width: wp("87%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(255, 223, 186, 1)",
    borderWidth: 1.5
  },
  View_I48_2571_48_2536: {
    flexGrow: 1,
    width: wp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I48_2571_48_2536: {
    color: "rgba(34, 23, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_2616: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("57%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I48_2616_48_2601: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(232, 125, 0, 1)"
  },
  View_I48_2616_48_2609: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I48_2616_48_2609_48_638: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_49_882: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("62%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I49_882_49_852: {
    flexGrow: 1,
    width: wp("87%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_I49_882_49_853: {
    width: wp("87%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 223, 186, 1)",
    opacity: 0.20000000298023224
  },
  View_I49_882_49_854: {
    width: wp("17%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 223, 186, 1)"
  },
  View_I49_882_49_855: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I49_882_49_855: {
    color: "rgba(221, 136, 207, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4063: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I59_4063_51_2684: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%")
  },
  View_I59_4063_51_2685: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("7%")
  },
  View_I59_4063_51_2686: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(34, 23, 42, 1)",
    borderWidth: 1
  },
  ImageBackground_I59_4063_51_2687: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I59_4063_51_2688: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I59_4063_51_2688_48_1834: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I59_4063_51_2688_48_1835: {
    width: wp("100%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I59_4063_51_2688_48_1836: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("2%")
  },
  View_I59_4063_51_2688_48_1837: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(34, 23, 42, 1)",
    borderWidth: 1
  },
  ImageBackground_I59_4063_51_2688_48_1838: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_I59_4063_51_2688_48_1839: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(34, 23, 42, 1)"
  },
  ImageBackground_I59_4063_51_2688_48_1840: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_I59_4063_51_2688_48_1844: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_I59_4063_51_2688_48_1849: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I59_4063_51_2688_48_1850: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I59_4063_51_2688_48_1850: {
    color: "rgba(34, 23, 42, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_8_2326: {
    width: wp("87%"),
    minWidth: wp("87%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_8_2326: {
    color: "rgba(34, 23, 42, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_2625: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("71%"),
    backgroundColor: "rgba(209, 213, 219, 1)"
  },
  View_I48_2625_48_1633: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I48_2625_48_1634: {
    width: wp("36%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("3%"),
    backgroundColor: "rgba(34, 23, 42, 1)"
  },
  View_I48_2625_48_1635: {
    flexGrow: 1,
    width: wp("98%"),
    height: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I48_2625_48_1636: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  ImageBackground_I48_2625_48_1637: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I48_2625_48_1643: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I48_2625_48_1644: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I48_2625_48_1645: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I48_2625_48_1652: {
    width: wp("23%"),
    height: hp("6%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I48_2625_48_1653: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I48_2625_48_1654: {
    flexGrow: 1,
    width: wp("23%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I48_2625_48_1654: {
    color: "rgba(34, 23, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I48_2625_48_1655: {
    width: wp("49%"),
    height: hp("6%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I48_2625_48_1656: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I48_2625_48_1657: {
    flexGrow: 1,
    width: wp("49%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I48_2625_48_1657: {
    color: "rgba(34, 23, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I48_2625_48_1658: {
    width: wp("23%"),
    height: hp("6%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I48_2625_48_1659: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I48_2625_48_1660: {
    flexGrow: 1,
    width: wp("23%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I48_2625_48_1660: {
    color: "rgba(34, 23, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I48_2625_48_1661: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  View_I48_2625_48_1662: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I48_2625_48_1663: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I48_2625_48_1664: {
    flexGrow: 1,
    width: wp("11%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I48_2625_48_1664: {
    color: "rgba(34, 23, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I48_2625_48_1665: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I48_2625_48_1666: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I48_2625_48_1669: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I48_2625_48_1670: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_I48_2625_48_1671: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I48_2625_48_1672: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_I48_2625_48_1673: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I48_2625_48_1674: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I48_2625_48_1675: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I48_2625_48_1676: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I48_2625_48_1677: {
    width: wp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I48_2625_48_1677: {
    color: "rgba(34, 23, 42, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  ImageBackground_I48_2625_48_1678: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I48_2625_48_1679: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I48_2625_48_1680: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I48_2625_48_1681: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I48_2625_48_1681: {
    color: "rgba(34, 23, 42, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I48_2625_48_1682: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I48_2625_48_1683: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I48_2625_48_1684: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I48_2625_48_1684: {
    color: "rgba(34, 23, 42, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I48_2625_48_1685: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I48_2625_48_1686: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I48_2625_48_1687: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I48_2625_48_1687: {
    color: "rgba(34, 23, 42, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I48_2625_48_1688: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I48_2625_48_1689: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I48_2625_48_1690: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I48_2625_48_1690: {
    color: "rgba(34, 23, 42, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I48_2625_48_1691: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I48_2625_48_1692: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I48_2625_48_1693: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I48_2625_48_1693: {
    color: "rgba(34, 23, 42, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I48_2625_48_1694: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I48_2625_48_1695: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I48_2625_48_1696: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I48_2625_48_1696: {
    color: "rgba(34, 23, 42, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I48_2625_48_1697: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I48_2625_48_1698: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I48_2625_48_1699: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I48_2625_48_1699: {
    color: "rgba(34, 23, 42, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I48_2625_48_1700: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I48_2625_48_1701: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I48_2625_48_1702: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I48_2625_48_1702: {
    color: "rgba(34, 23, 42, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I48_2625_48_1703: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I48_2625_48_1704: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I48_2625_48_1705: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I48_2625_48_1705: {
    color: "rgba(34, 23, 42, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I48_2625_48_1706: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I48_2625_48_1707: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I48_2625_48_1708: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I48_2625_48_1708: {
    color: "rgba(34, 23, 42, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I48_2625_48_1709: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I48_2625_48_1710: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I48_2625_48_1711: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I48_2625_48_1711: {
    color: "rgba(34, 23, 42, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I48_2625_48_1712: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I48_2625_48_1713: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I48_2625_48_1714: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I48_2625_48_1714: {
    color: "rgba(34, 23, 42, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I48_2625_48_1715: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I48_2625_48_1716: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I48_2625_48_1717: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I48_2625_48_1717: {
    color: "rgba(34, 23, 42, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I48_2625_48_1718: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I48_2625_48_1719: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I48_2625_48_1720: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I48_2625_48_1720: {
    color: "rgba(34, 23, 42, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I48_2625_48_1721: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I48_2625_48_1722: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I48_2625_48_1723: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I48_2625_48_1723: {
    color: "rgba(34, 23, 42, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I48_2625_48_1724: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I48_2625_48_1725: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I48_2625_48_1726: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I48_2625_48_1726: {
    color: "rgba(34, 23, 42, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I48_2625_48_1727: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I48_2625_48_1728: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I48_2625_48_1729: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I48_2625_48_1729: {
    color: "rgba(34, 23, 42, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I48_2625_48_1730: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I48_2625_48_1731: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I48_2625_48_1732: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I48_2625_48_1732: {
    color: "rgba(34, 23, 42, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I48_2625_48_1733: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I48_2625_48_1734: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I48_2625_48_1735: {
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I48_2625_48_1735: {
    color: "rgba(34, 23, 42, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I48_2625_48_1736: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I48_2625_48_1737: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I48_2625_48_1738: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I48_2625_48_1738: {
    color: "rgba(34, 23, 42, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I48_2625_48_1739: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I48_2625_48_1740: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I48_2625_48_1741: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I48_2625_48_1741: {
    color: "rgba(34, 23, 42, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I48_2625_48_1742: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I48_2625_48_1743: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I48_2625_48_1744: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I48_2625_48_1744: {
    color: "rgba(34, 23, 42, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I48_2625_48_1745: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I48_2625_48_1746: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I48_2625_48_1747: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I48_2625_48_1747: {
    color: "rgba(34, 23, 42, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I48_2625_48_1748: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I48_2625_48_1749: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I48_2625_48_1750: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I48_2625_48_1750: {
    color: "rgba(34, 23, 42, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I48_2625_48_1751: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I48_2625_48_1752: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I48_2625_48_1753: {
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I48_2625_48_1753: {
    color: "rgba(34, 23, 42, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I48_2625_48_1754: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I48_2625_48_1755: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I48_2625_48_1756: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I48_2625_48_1756: {
    color: "rgba(34, 23, 42, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
