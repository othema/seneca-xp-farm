import {
	Alert,
  Anchor,
  AppShell,
  Avatar,
  Button,
  Center,
  Checkbox,
  Container,
  Group,
  Header,
  MantineProvider,
  Navbar,
  NumberInput,
  PasswordInput,
  Progress,
  Slider,
  Stack,
  Stepper,
  Text,
  TextInput,
	Title,
	useMantineTheme,
} from "@mantine/core";
import {
	IconAlertCircle,
  IconArrowNarrowRight,
  IconCheck,
  IconMail,
  IconPassword,
  IconRocket,
	IconX,
} from "@tabler/icons";
import { useState, ReactNode, useEffect } from "react";
import { farmPoints, senecaLogin } from "./senecaApi";

function App() {
	const theme = useMantineTheme();

  const [activeStep, setActiveStep] = useState(0);
  const nextStep = () => {
    setActiveStep(activeStep + 1);
  };
  const [termsChecked, setTermsChecked] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [loginLoading, setLoginLoading] = useState(false);
  const [generateLoading, setGenerateLoading] = useState(false);

	const [generatePercent, setGeneratePercent] = useState(0);
	const [generateSuccess, setGenerateSuccess] = useState(true);

  const [userInfo, setUserInfo] = useState<any>({});
	const [testsAmount, setTestsAmount] = useState(10);
	const [waitTime, setWaitTime] = useState(300);

  const login = async () => {
		setLoginLoading(true);
		const userInfoNew = await senecaLogin(email, password)
    setUserInfo(userInfoNew)

    if (!userInfoNew.error) nextStep();
    else {
      const error = userInfoNew.error;
      if (error.message.indexOf("INVALID") === 0) {
        // Invalid password
        setEmailError("");
        setPasswordError("Invalid password");
      } else if (error.message.indexOf("EMAIL") === 0) {
        // Invalid email
        setEmailError("Invalid email");
        setPasswordError("");
      }
    }

    setLoginLoading(false);
  };

  const generatePoints = async () => {
		setGenerateLoading(true);
		setGenerateSuccess(true);
		
		const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
		let testsCompleted = 0;

		for (let i = 0; i < testsAmount; i++) {
			farmPoints(userInfo.idToken).then(data => {
				testsCompleted++;
				setGeneratePercent(Math.round((testsCompleted / testsAmount) * 100));
				if (data.message) {
					setGenerateSuccess(false);
				}
			});
			await delay(waitTime);
			if (!generateSuccess)
				break;
		}

		nextStep();
    setGenerateLoading(false);
	};
	
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "light",
        primaryColor: "dark",
      }}
    >
      <AppShell
        padding="lg"
        header={
          <Header height={54} p="xs">
            <Group>
              <Avatar color="black">S</Avatar>
              <Text weight="bolder" size="xl">
                Seneca XP farmer
              </Text>
            </Group>
          </Header>
        }
      >
        <Container size={800}>
					<Alert icon={<IconAlertCircle size={16} />} color="red">Sometimes the app doesn't work and I dont know why.</Alert>

          <Stepper
            style={{ marginTop: 30 }}
            active={activeStep}
            onStepClick={setActiveStep}
            breakpoint="xs"
          >
            <Stepper.Step
              label="Login"
              description="Login with Seneca"
              loading={loginLoading}
            >
              <StepperWrapper>
                <TextInput
                  label="Email"
                  placeholder="Your Seneca email"
                  icon={<IconMail size={20} />}
                  value={email}
                  onChange={(event) => setEmail(event.currentTarget.value)}
                  error={emailError}
                  required
                />
                <PasswordInput
                  label="Password"
                  placeholder="Your Seneca password"
                  icon={<IconPassword size={20} />}
                  value={password}
                  onChange={(event) => setPassword(event.currentTarget.value)}
                  error={passwordError}
                  required
                />
                <Button my="lg" onClick={login} loading={loginLoading}>
                  Login
                </Button>
              </StepperWrapper>
						</Stepper.Step>
						
            <Stepper.Step label="Courses" description="Select a target course">
              <StepperWrapper>
                <Text weight="bolder">
                  You have no choice. For now, this website only works with the{" "}
                  <Anchor
                    href="https://app.senecalearning.com/classroom/course/a1ce4570-6e27-11e8-af4b-35cf52f905c2"
                    underline
                    color="blue"
                  >
                    OCR GCSE Computer Science
                  </Anchor>{" "}
                  course.
                </Text>

                <Button
                  my="lg"
                  leftIcon={<IconArrowNarrowRight />}
                  onClick={nextStep}
                >
                  Next step
                </Button>
              </StepperWrapper>
						</Stepper.Step>
						
            <Stepper.Step
              label="Generation"
              description="Tinker with settings"
              loading={generateLoading}
            >
              <StepperWrapper>
                <NumberInput
                  placeholder="Amount of tests to complete"
                  max={1000}
                  min={1}
                  value={testsAmount}
                  onChange={(val) => {
                    if (val) setTestsAmount(val);
                  }}
                  label="Amount of tests to complete"
                  description="One test rewards approximately 30-150 points"
								/>

								<Text size="sm" mt="sm">Time between requests</Text>
								<Text size="xs" color="gray">A smaller time means more tests completed per second</Text>
								<Slider
									step={25}
									min={50}
									max={2000}
									label={value => `${value}ms`}
									value={waitTime}
									onChange={setWaitTime}
								/>

                <Checkbox
									mt="xl"
                  label="I acknowledge that I am stupid"
                  checked={termsChecked}
                  onChange={(event) =>
                    setTermsChecked(event.currentTarget.checked)
                  }
								/>
								
                <Button
                  my="xs"
                  disabled={!termsChecked}
                  leftIcon={<IconRocket />}
                  onClick={generatePoints}
                  loading={generateLoading}
                >
                  Generate!
                </Button>

                {generateLoading ? (
                  <Progress
                    value={generatePercent}
                    label={generatePercent + "%"}
                    size="lg"
                    radius="xl"
                    styles={{
                      label: {
                        float: "right",
                        marginLeft: "auto",
                        marginRight: "10px",
                      },
                    }}
                  />
                ) : (
                  <></>
                )}
              </StepperWrapper>
            </Stepper.Step>
            <Stepper.Completed>
              <StepperWrapper>
                <Center>
                  <Avatar radius="xl" color={generateSuccess ? "green" : "red"}>
                    {generateSuccess ? <IconCheck /> : <IconX />}
                  </Avatar>
                </Center>
                <Title
                  style={{ marginTop: theme.spacing.sm }}
                  order={3}
                  align="center"
                >
                  {generateSuccess
                    ? `${testsAmount} tests completed`
                    : "Generation failed"}
                  .
                </Title>
                {!generateSuccess ? (
                  <Text align="center" color="gray">
                    Try logging in again.
                  </Text>
                ) : (
                  <></>
                )}
                <Center>
                  <Button my="lg" onClick={() => setActiveStep(2)}>
                    Generate again
                  </Button>
                </Center>
              </StepperWrapper>
            </Stepper.Completed>
          </Stepper>
        </Container>
      </AppShell>
    </MantineProvider>
  );
}

function StepperWrapper({ children }: { children: ReactNode }) {
  return (
    <Container size={400}>
      <Stack my="lg" spacing={0}>
        {children}
      </Stack>
    </Container>
  );
}

export default App;
