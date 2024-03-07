import React from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HomeIcon from '@mui/icons-material/Home';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CreateIcon from '@mui/icons-material/Create';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import AddIcon from '@mui/icons-material/Add';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatStrikethroughIcon from '@mui/icons-material/FormatStrikethrough';
import LinkIcon from '@mui/icons-material/Link';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import NotesIcon from '@mui/icons-material/Notes';
import CodeIcon from '@mui/icons-material/Code';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import EmergencyRecordingIcon from '@mui/icons-material/EmergencyRecording';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import DrawIcon from '@mui/icons-material/Draw';
import SendIcon from '@mui/icons-material/Send';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className='flex'>
            <div className='flex-col px-3 w-24 pr-24 bg-gray-500'>
                <div className=' py-2 px-5'><AccountBoxIcon /></div>
                <div className='py-2 px-5 '><HomeIcon className='hover:bg-gray-400' /></div>
                <div className='py-2 px-5 font-bold'>Home</div>
                <div className='py-2 px-5'><QuestionAnswerIcon className='hover:bg-gray-400' /></div>
                <div className='py-2 px-5 font-bold '>DMs</div>
                <div className='py-2 px-5'><NotificationsIcon className='hover:bg-gray-400' /></div>
                <div className='py-2 px-5 font-bold'>Activity</div>
                <div className='py-2 px-5'><MoreHorizIcon className='hover:bg-gray-400' /></div>
                <div className='py-2 px-5 font-bold'>More</div>
                <div className='absolute bottom-16'><AddCircleIcon /></div>
                <div className='absolute bottom-5'><PersonIcon /></div>
            </div>
            <div className='px-3 w-96 pr-36 bg-gray-300'>
                <div className='flex'>
                    <div><h2 className='text-2xl font-bold font-serif '>Unskippable_Ad</h2></div>
                    <div><KeyboardArrowDownIcon /></div>
                    <div className='ml-14'><ClearAllIcon /></div>
                    <div><CreateIcon /></div>
                </div>
                <div className='h-5'></div>
                <hr />
                <div className='h-10'></div>
                <div className='flex py-3'><ArrowRightIcon /><div>Channels</div></div>
                <div className='flex py-3'><ArrowRightIcon /><div>Direct Messages</div></div>
                <div className='flex py-3'><ArrowRightIcon /><div>Apps</div></div>
            </div>
            <div className='bg-gray-300'>
                <div className='flex '>
                    <div><PersonIcon /></div>
                    <div className='font-bold'>sujalnitrkl0596</div>
                    <div><ArrowDropDownIcon /></div>
                    <div className='absolute right-16'><StickyNote2Icon className='' /></div>
                    <div className='absolute right-2'>Canvas</div>

                </div>
                <div className='h-5'></div>
                <hr />
                <div className='h-3'></div>
                <div className='flex'>
                    <div><AddIcon /></div>
                    <div><h3>Add a bookmark</h3></div>
                </div>
                <div className='h-3'></div>
                <hr />
                <div className='flex absolute bottom-64'>
                    <div><PersonIcon /></div>
                    <div className='font-bold'>sujalnitrkl0596(you)</div></div>
                <div className='absolute bottom-48 px-3'>This is your space. Draft messages, list your to-dos, or keep links and files handy. You can also talk to yourself here, but please bear in mind you’ll have to supply both sides of the conversation.</div>
                <div className='flex px-3 absolute bottom-36'>
                    <div className='bg-white-800 rounded-lg border-black border-solid border-2 h-8 w-36 text-center font-bold'><button>Edit Profile</button></div>
                    <div className='w-5'></div>
                    <button type="button" className='bg-white-800 rounded-lg border-black border-solid border-2 w-48 text-center font-bold'>Upload Profile Pic</button>
                </div>
                <div className='flex absolute bottom-24'>
                    <div className='px-3'><FormatBoldIcon /></div>
                    <div className='px-3'><FormatItalicIcon /></div>
                    <div className='px-3'><FormatStrikethroughIcon /></div>
                    <div className='px-3'><LinkIcon /></div>
                    <div className='px-3'><FormatListNumberedIcon /></div>
                    <div className='px-3'><FormatListBulletedIcon /></div>
                    <div className='px-3'><NotesIcon /></div>
                    <div className='px-3'><CodeIcon /></div>
                    <div className='px-3'><CodeOffIcon /></div>
                </div>
                <input placeholder='1.' className='absolute bottom-14 w-96 px-3'></input>
                <div className='flex absolute bottom-5'>
                    <div className='px-3'><AddIcon /></div>
                    <div className='px-3'><SortByAlphaIcon /></div>
                    <div className='px-3'><InsertEmoticonIcon /></div>
                    <div className='px-3'><AlternateEmailIcon /></div>
                    <div className='px-3'><EmergencyRecordingIcon /></div>
                    <div className='px-3'><KeyboardVoiceIcon /></div>
                    <div className='px-3'><DrawIcon /></div>
                    <div className='px-3'><SendIcon /></div>
                    <div className='px-3' ><ArrowDropDownIcon /></div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
