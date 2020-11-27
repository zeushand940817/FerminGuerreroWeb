import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import MuiTreeItem from "@material-ui/lab/TreeItem";
import { withStyles } from "@material-ui/core/styles";

//Components
import Background from 'components/Background';
import Contact from 'components/Contact';
import PressMobile from 'components/PressMobile';
import AwardsMobile from 'components/AwardsMobile';



const useStyles = makeStyles({
  root: {
    height: 'auto',
    flexGrow: 1,
    maxWidth: 400,
    fontSize:'30px',
  },
});

const TreeItem1 = withStyles({
  root: {
    "&.Mui-selected > .MuiTreeItem-content": {
      color: "tomato",
      display:'flex',
      flexDirection:'row'
    },
  }
})(MuiTreeItem);

export default function FileSystemNavigator() {
  const classes = useStyles();

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<RemoveIcon />}
      defaultExpandIcon={<AddIcon />}
    >
      <TreeItem1 nodeId="1" label="Background">
          <Background />
      </TreeItem1>
      <TreeItem1 nodeId="2" label="Contact">
       <Contact />
      </TreeItem1>
      <TreeItem1 nodeId="3" label="Awards">
        <AwardsMobile />
      </TreeItem1> 
      <TreeItem1 nodeId="4" label="Articles & papers">
        <PressMobile />
      </TreeItem1> 
    </TreeView>
  );
}



