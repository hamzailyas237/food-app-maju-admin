"use client"
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react"
import { FiMenu, FiChevronDown } from "react-icons/fi"
import { BsBoxFill } from "react-icons/bs"
import { RiInboxArchiveFill } from "react-icons/ri"
import { GiGavel } from "react-icons/gi"
import classes from "./navbar.module.css"
import logo from "../../assets/logo.png"
import { FaUser } from "react-icons/fa"
import { PiSignOutBold } from "react-icons/pi"
import { NavLink, useNavigate } from "react-router-dom"
import AppModal from "../modal/AppModal"
import awesomeQuestionCircle from "../../assets/awesomeQuestionCircle.png"
import { useDispatch, useSelector } from "react-redux"
import { LogoutAction } from "../../store/actions/AuthActions"
import { BsPersonVideo3 } from "react-icons/bs"
import { RiLockPasswordFill } from "react-icons/ri"

const LinkItems = [
  { name: "Admin Profile", icon: FaUser, route: "/" },
  { name: "Admin Products", icon: GiGavel, route: "/admin-products" },
  {
    name: "Admin Shipping Details",
    icon: BsBoxFill,
    route: "/shipping/details",
  },
  {
    name: "Admin Product Orders",
    icon: RiInboxArchiveFill,
    route: "/product-orders",
  },
  {
    name: "Classes",
    icon: BsPersonVideo3,
    route: "/classes",
  },
]

const SidebarContent = ({ onClose, ...rest }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { token } = useSelector((state) => {
    return state.LoginReducer
  })
  const logoutHandler = () => {
    dispatch(LogoutAction(token, navigate))
  }

  return (
    <Box
      className={`${
        (classes["navbar-background"], classes["sidebar-content"])
      }`}
      transition="3s ease"
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          <img src={logo} alt="logo" />
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>

      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="md" color={"#01AED0"}>
          Admin Dashboard
        </Text>
        <Flex alignItems={"center"} cursor={"pointer"} gap={1}>
          <PiSignOutBold />
          <AppModal
            text={"Logout"}
            heading={"Logout"}
            body={"Are you sure you want to sign out?"}
            icon={awesomeQuestionCircle}
            styles={{ fontSize: "14px" }}
            onAccept={logoutHandler}
            onRejectBtnText={"No"}
            onAcceptBtnText={"Yes"}
            rejectBtnStyle={{
              backgroundColor: "1A1A1A ",
              border: "1px solid #00B4D8",
              width: "152px",
              height: "64px",
              borderRadius: "32px",
              opacity: 1,
            }}
            acceptBtnStyle={{
              backgroundColor: "#00B4D8 ",
              boxShadow: "0px 10px 20px #e4201e29",
              width: "153px",
              height: "64px",
              borderRadius: "32px",
              opacity: 1,
            }}
          />
        </Flex>
      </Flex>

      {LinkItems.map((link, i) => (
        <NavLink
          key={i}
          to={link.route}
          style={({ isActive }) => ({
            color: isActive ? "#00B4D8" : "white",
            background: isActive ? "#FFFFFF" : "#1E1E1E",
            width: "350px",
            height: "44px",
            borderRadius: "20px",
          })}
        >
          <Flex
            align="center"
            p="4"
            mx="4"
            borderRadius="lg"
            role="group"
            cursor="pointer"
            textDecoration="none"
          >
            {link.icon && <Icon mr="4" fontSize="16" as={link.icon} />}
            {link.name}
          </Flex>
        </NavLink>
      ))}
    </Box>
  )
}

const MobileNav = ({ onOpen, ...rest }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { token } = useSelector((state) => {
    return state.LoginReducer
  })

  const { profileData } = useSelector((state) => {
    return state.ProfileReducer
  })

  const logoutHandler = () => {
    dispatch(LogoutAction(token, navigate))
  }
  return (
    <Flex
      className={`${classes["navbar-header"]}`}
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        <img src={logo} alt="logo" />
      </Text>
      <HStack spacing={{ base: "0", md: "6" }}>
        <Flex alignItems={"center"}>
          <Menu>
            {/* <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <IconButton
                  border={"1px solid #00B4D8"}
                  bg={"#1E1E1E"}
                  size="lg"
                  aria-label="open menu"
                  icon={<FiBell color="#00B4D8" />}
                  _hover={"none"}
                />
              </HStack>
            </MenuButton> */}
            <MenuList
              bgColor={"#1E1E1E"}
              borderColor={"#0B7489"}
              style={{ width: "400px" }}
            >
              <MenuItem bgColor={"#1E1E1E"} color={"white"}>
                <div className={`${classes["notification-container"]}`}>
                  <div className={`${classes["notification-content"]}`}>
                    <Avatar
                      size={"md"}
                      src={
                        "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                      }
                    />
                    <div>
                      <p className={`${classes["notification-name"]}`}>
                        lorem lorem lorem
                      </p>
                      <p className={`${classes["notification-text"]}`}>
                        lorem lorem lorem
                      </p>
                    </div>
                  </div>
                  <div className={`${classes["notification-date"]}`}>
                    <p>12/12/22</p>
                    <p>Yesterday</p>
                  </div>
                </div>
              </MenuItem>
              <MenuItem bgColor={"#1E1E1E"} color={"white"}>
                <div className={`${classes["notification-container"]}`}>
                  <div className={`${classes["notification-content"]}`}>
                    <Avatar
                      size={"md"}
                      src={
                        "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                      }
                    />
                    <div>
                      <p className={`${classes["notification-name"]}`}>
                        lorem lorem lorem
                      </p>
                      <p className={`${classes["notification-text"]}`}>
                        lorem lorem lorem
                      </p>
                    </div>
                  </div>
                  <div className={`${classes["notification-date"]}`}>
                    <p>12/12/22</p>
                    <p>Yesterday</p>
                  </div>
                </div>
              </MenuItem>

              <MenuItem
                className={`${classes["view-all-notifications"]}`}
                bgColor={"#1E1E1E"}
                color={"white"}
              >
                <p>View All</p>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>

        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    profileData[0]?.user &&
                    `https://ultra-fitness-development.s3.ap-south-1.amazonaws.com/${profileData[0]?.user?.photo}`
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                  color={"white"}
                >
                  <Text fontSize="sm">
                    {profileData[0] && profileData[0]?.fullname}
                  </Text>
                  <Text fontSize="xs">Admin</Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown color="white" />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bgColor={"#1E1E1E"}
              borderColor={"#0B7489"}
              style={{ width: "250px" }}
            >
              <MenuItem
                bgColor={"#1E1E1E"}
                color={"white"}
                p={0}
                onClick={() => navigate("/change-password")}
              >
                <div className={`${classes["notification-container"]}`}>
                  <div className={`${classes["notification-content"]}`}>
                    <IconButton
                      bg={"#1E1E1E"}
                      size="lg"
                      aria-label="open menu"
                      icon={<RiLockPasswordFill color="#00B4D8" />}
                      _hover={"none"}
                    />
                    <div>
                      <p className={`${classes["notification-name"]}`}>
                        Change Password
                      </p>
                    </div>
                  </div>
                </div>
              </MenuItem>
              <MenuItem bgColor={"#1E1E1E"} color={"white"} p={0}>
                <div className={`${classes["notification-container"]}`}>
                  <div className={`${classes["notification-content"]}`}>
                    <IconButton
                      bg={"#1E1E1E"}
                      size="lg"
                      aria-label="open menu"
                      icon={<PiSignOutBold color="#00B4D8" />}
                      _hover={"none"}
                    />
                    <AppModal
                      text={"Logout"}
                      heading={"Logout"}
                      body={"Are you sure you want to sign out?"}
                      icon={awesomeQuestionCircle}
                      styles={{ fontSize: "14px" }}
                      onAccept={logoutHandler}
                      onRejectBtnText={"No"}
                      onAcceptBtnText={"Yes"}
                      rejectBtnStyle={{
                        backgroundColor: "1A1A1A ",
                        border: "1px solid #00B4D8",
                        width: "152px",
                        height: "64px",
                        borderRadius: "32px",
                        opacity: 1,
                      }}
                      acceptBtnStyle={{
                        backgroundColor: "#00B4D8 ",
                        boxShadow: "0px 10px 20px #e4201e29",
                        width: "153px",
                        height: "64px",
                        borderRadius: "32px",
                        opacity: 1,
                      }}
                    />
                  </div>
                </div>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  )
}

const Navbar = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box minH="100vh" className={`${classes["navbar-background"]}`}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
        style={{ width: "270px" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Box ml={50}>
        {/* mobilenav */}
        <MobileNav onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }} p="4">
          {/* Content */}
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar
