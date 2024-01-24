import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const LoadingItems = () => {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Grid container wrap="nowrap">
        {Array.from(new Array(3)).map((_, index) => (
          <Box key={index} sx={{ width: '30%', marginRight: 5, my: 5 }}>
            <div className="aspect-[512/288]">
            <Skeleton variant="rectangular" width={'100%'} height={'100%'} />
            </div>
            <Box sx={{ pt: 4 }}>
              <Skeleton width="30%" />
              <Skeleton />
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default LoadingItems;
