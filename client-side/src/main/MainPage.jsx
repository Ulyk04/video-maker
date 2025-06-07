import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import CloudUpload from '@mui/icons-material/CloudUpload';
import Settings from '@mui/icons-material/Settings';
import VideoCall from '@mui/icons-material/VideoCall';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { DemoProvider, useDemoRouter } from '@toolpad/core/internal';
import { Grid } from '@mui/material';
import { PageContainer } from '@toolpad/core/PageContainer';
import Upload from '../component/Upload';
import Edit from '../component/Edit';
import Export from '../component/Export';

const NAVIGATION = [
  {
    segment: 'upload',
    title: 'Upload',
    icon: <CloudUpload />,
  },
  {
    segment: 'edit',
    title: 'Edit',
    icon: <Settings />,
  },
  {
    segment: 'export',
    title: 'Export',
    icon: <VideoCall />,
  }
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#ffffff', 
        },
        secondary: {
          main: '#ffffff', 
        },
        background: {
          default: '#72ed93', 
          paper: '#4fa165',  
        },
        text: {
          primary: 'white',
          secondary: '#ffffff', 
        },
        
        custom: { 
            mainBackground: '#ffffff', 
        }
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#90caf9', 
        },
        secondary: {
          main: '#f48fb1', 
        },
        background: {
          default: '#585870', 
          paper: '#424242',   
        },
        text: {
          primary: '#ffffff', 
          secondary: '#bdbdbd', 
        },
         custom: { 
            mainBackground: '#343a40', 
        }
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function DashboardLayoutBranding(props) {
  const { window } = props;

  const router = useDemoRouter('/dashboard');

 
  const demoWindow = window !== undefined ? window() : undefined;

  return (

    <DemoProvider window={demoWindow}>
      
      <AppProvider
        navigation={NAVIGATION}
        branding={{
          logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,
          title: 'MUI',
          homeUrl: '/toolpad/core/introduction',
        }}
        router={router}
        theme={demoTheme}
        window={demoWindow}
      >
        <DashboardLayout>
          <PageContainer sx={{backgroundColor:'background.default' ,minHeight: '100vh' , p: 2 }} >
              <Grid>
                <Grid>
                  {
                    router.pathname === '/upload' && (
                      <Upload />
                    )
                  }
                </Grid>
                <Grid>
                  {
                    router.pathname === '/edit' && (
                      <Edit />
                    )
                  }
                </Grid>
                <Grid>
                  {
                  router.pathname === '/export' && (
                    <Export />
                  )
                  }
                </Grid>
              </Grid>
          </PageContainer>
        </DashboardLayout>
      </AppProvider>
     
    </DemoProvider>
  );
}

DashboardLayoutBranding.propTypes = {
 
  window: PropTypes.func,
};

export default DashboardLayoutBranding;