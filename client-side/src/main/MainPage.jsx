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



function DashboardLayoutBranding(props) {
  const { window } = props;

  const router = useDemoRouter('/upload');

  const [videoTitle, setVideoTitle] = React.useState('');
  const [uploadedVideoFile, setUploadedVideoFile] = React.useState(null);

 
  const demoWindow = window !== undefined ? window() : undefined;

  const handleUploadComplete = (title, filePath) => {
    setVideoTitle(title);
    setUploadedVideoFile(filePath);
    router.push('/edit');
  }

  const handleEditComplete = (editedVideoUrl) => {
    console.log('Editing complete. Edited video URL:', editedVideoUrl);
    router.push('/export');
  }

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
              <Grid container spacing={2} justifyContent="center" alignItems="flex-start" >
                <Grid item xs={12} sm={8} md={6} lg={4} >
                  {
                    router.pathname === '/upload' && (
                      <Upload 
                        videoTitle={videoTitle}
                        setVideoTitle={setVideoTitle}
                        onUploadComplete={handleUploadComplete}
                      />
                    )
                  }
                </Grid>
                <Grid>
                  {
                    router.pathname === '/edit' && (
                      <Edit
                        videoTitle={videoTitle}
                        uploadedVideoFile={uploadedVideoFile}
                        setStep={() => {}} 
                        onEditComplete={handleEditComplete} 
                      />
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