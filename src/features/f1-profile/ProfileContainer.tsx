import {Profile} from './Profile';
import {useState} from "react";

export const ProfileContainer = () => {

	const [editMode, setEditMode] = useState<boolean>(false);

	const onClickEditMode = (edit: boolean) => {
		setEditMode(edit);
	};

	return (
		<>
			<Profile
				editMode={editMode}
				onClickEditMode={onClickEditMode}

			/>
		</>
	);
};