import { Col, Row } from "antd"
import CustomTextInput from "./components/CustomTextInput/CustomTextInput"
import CustomButton from "./components/CustomButton/CustomButton"
import Spacer from "./components/Spacer/Spacer"
import { Formik } from "formik"
import * as Yup from "yup"
import { useAppDispatch } from "./redux/hooks"
import { RootState } from "./redux/store"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { keys } from "./constants/localStorageKeys"
import { useNavigate } from "react-router-dom"
import { clearUserLoginState } from "./redux/features/user.slice"
import CustomToast from "./components/CustomToast/CustomToast"
import PasswordInput from "./components/PasswordInput/PasswordInput"
import { _getUserByToken, _userLogin } from "./redux/actions"
import { colors } from "./constants/colors"

interface formDataType {
  email: string
  password: string
}

const App = () => {
  const { isError, isSuccess, msg, loading, isAuthenticated, user } =
    useSelector((state: RootState) => state.userSlice)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (isSuccess) {
      // use token to authenticate user
      authenticateUser()
      setTimeout(() => {
        dispatch(clearUserLoginState())
      }, 2000)
    }

    if (isError) {
      setTimeout(() => {
        dispatch(clearUserLoginState())
      }, 4000)
    }
  }, [isSuccess, isError])

  useEffect(() => {
    if (isAuthenticated && user) {
      //navigate to dashboard
      navigate("/dashboard")
    }
  }, [isAuthenticated, user])

  const handleLogin = (values: formDataType) => {
    dispatch(_userLogin(values))
  }

  const authenticateUser = () => {
    let token = localStorage.getItem(keys.ACCESS_TOKEN_KEY)
    token && dispatch(_getUserByToken({ token: token }))
    //TODO if token is not found
    //error
  }

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must have atleast 6 characters")
      .max(50, "Too Long!")
      .required("Password is required")
    //vite
  })

  return (
    <Row style={{ width: "100%", height: "100vh" }}>
      <Col xs={24} sm={24} md={8}></Col>
      <Col xs={24} sm={24} md={8}>
        {/* toast */}
        <CustomToast
          show={isError || isSuccess}
          isError={isError}
          isSuccess={isSuccess}
          message={msg}
        />
        {/* form here */}
        <Formik
          onSubmit={(values, actions) => {
            handleLogin(values)
            actions.resetForm()
          }}
          initialValues={{
            email: "",
            password: ""
          }}
          validationSchema={LoginSchema}
        >
          {({ values, errors, handleSubmit, handleChange, touched }) => {
            return (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Spacer height={20} />
                {/* add logo */}
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    fontSize: 20,
                    fontWeight: 700,
                    color: colors.primary
                  }}
                >
                  JCH
                </div>
                <div>ADMIN LOGIN</div>
                <Spacer height={25} />

                <CustomTextInput
                  placeholder="Enter Email"
                  onChange={handleChange("email")}
                  value={values.email}
                  error={touched.email && errors.email ? errors.email : ""}
                />
                <Spacer height={15} />
                <PasswordInput
                  placeholder="Enter Password"
                  onChange={handleChange("password")}
                  value={values.password}
                  error={
                    touched.password && errors.password ? errors.password : ""
                  }
                />

                <Spacer />

                <CustomButton
                  title="Login"
                  onClick={() => handleSubmit()}
                  loading={loading}
                />
              </div>
            )
          }}
        </Formik>
      </Col>
      <Col xs={24} sm={24} md={8}></Col>
    </Row>
  )
}

export default App
