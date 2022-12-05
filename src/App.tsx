import { AppShell, Button, Container, MantineProvider, PasswordInput, Stack, Stepper, TextInput, useMantineTheme } from "@mantine/core";
import { useState } from "react";

function App() {
	const theme = useMantineTheme();
	const [activeStep, setActiveStep] = useState(1);

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "light",
        primaryColor: "dark",
      }}
    >
      <AppShell padding="lg">
        <Container size={800}>
          <Stepper
            active={activeStep}
            onStepClick={setActiveStep}
            breakpoint="sm"
          >
						<Stepper.Step label="Login" description="Login with Seneca">
              <Container size={400}>
								<Stack my="lg" spacing={0}>
									<TextInput label="Username" required />
									<PasswordInput label="Password" required />
									<Button my="lg" onClick={() => setActiveStep(activeStep + 1)}>Login</Button>
                </Stack>
              </Container>
            </Stepper.Step>
            <Stepper.Step label="Courses" description="Select a target course">
              Step 2 content
            </Stepper.Step>
            <Stepper.Step label="Generation" description="Tinker with settings">
              Step 3 content
            </Stepper.Step>
          </Stepper>
        </Container>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
