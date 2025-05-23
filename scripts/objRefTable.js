const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Tilemap,
		C3.Behaviors.solid,
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.DragnDrop,
		C3.Plugins.Touch,
		C3.Plugins.Keyboard,
		C3.Plugins.Mouse,
		C3.Plugins.Spritefont2,
		C3.Behaviors.Tween,
		C3.Behaviors.Timer,
		C3.Plugins.Particles,
		C3.Plugins.TiledBg,
		C3.Behaviors.MoveTo,
		C3.Behaviors.scrollto,
		C3.Plugins.NinePatch,
		C3.Plugins.Audio,
		C3.Plugins.LocalStorage,
		C3.Behaviors.Sin,
		C3.Behaviors.Flash,
		C3.Plugins.TextBox,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.TiledBg.Acts.SetVisible,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Plugins.TiledBg.Acts.SetOpacity,
		C3.Plugins.System.Cnds.For,
		C3.Plugins.Sprite.Cnds.CompareX,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.Sprite.Acts.MoveToLayer,
		C3.Plugins.System.Acts.Wait,
		C3.Behaviors.Tween.Acts.TweenTwoProperties,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.System.Acts.SetGroupActive,
		C3.Plugins.System.Acts.SetLayoutScale,
		C3.Behaviors.Platform.Acts.SetMaxSpeed,
		C3.Plugins.Sprite.Acts.SetScale,
		C3.Plugins.System.Acts.SetLayerAngle,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Behaviors.solid.Acts.SetEnabled,
		C3.Plugins.Spritefont2.Cnds.CompareInstanceVar,
		C3.Plugins.Spritefont2.Acts.SetText,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Audio.Acts.SetMuted,
		C3.Plugins.Audio.Cnds.IsTagPlaying,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Keyboard.Cnds.OnAnyKey,
		C3.Plugins.Mouse.Cnds.OnAnyClick,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Touch.Cnds.OnTouchStart,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Acts.MoveToTop,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.Sprite.Exps.Opacity,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Behaviors.Platform.Cnds.IsOnFloor,
		C3.Behaviors.Platform.Cnds.IsJumping,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.Touch.Cnds.OnTouchEnd,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Behaviors.Platform.Acts.SetVectorY,
		C3.Behaviors.Platform.Exps.VectorY,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Cnds.Else,
		C3.Behaviors.Platform.Cnds.IsFalling,
		C3.Behaviors.Platform.Cnds.OnLand,
		C3.Behaviors.Platform.Cnds.OnJump,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Sprite.Exps.PickedCount,
		C3.Plugins.Sprite.Exps.Count,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.Sprite.Acts.SubInstanceVar,
		C3.Behaviors.Platform.Acts.SetGravity,
		C3.Behaviors.Platform.Acts.SetMaxFallSpeed,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Sprite.Cnds.OnAnyAnimFinished,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Sprite.Cnds.IsVisible,
		C3.Behaviors.DragnDrop.Cnds.OnDragStart,
		C3.Behaviors.Platform.Acts.SetEnabled,
		C3.Behaviors.DragnDrop.Cnds.OnDrop,
		C3.Plugins.TiledBg.Acts.SubInstanceVar,
		C3.Plugins.TiledBg.Cnds.CompareInstanceVar,
		C3.Plugins.TiledBg.Acts.Destroy,
		C3.Plugins.TiledBg.Exps.X,
		C3.Plugins.TiledBg.Exps.Y,
		C3.Behaviors.MoveTo.Acts.MoveToPosition,
		C3.Plugins.Sprite.Cnds.OnDestroyed,
		C3.Behaviors.MoveTo.Acts.SetEnabled,
		C3.Plugins.Keyboard.Cnds.OnAnyKeyReleased,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Exps.viewportwidth,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.Sprite.Cnds.OnCreated,
		C3.Plugins.Sprite.Cnds.CompareFrame,
		C3.Plugins.System.Acts.SetLayerInteractive,
		C3.Plugins.System.Acts.SetTimescale,
		C3.Plugins.System.Acts.SetObjectTimescale,
		C3.Plugins.System.Acts.GoToLayoutByName,
		C3.Plugins.System.Acts.AddVar,
		C3.Behaviors.Platform.Acts.SetIgnoreInput,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Plugins.LocalStorage.Acts.CheckItemExists,
		C3.Plugins.LocalStorage.Cnds.OnItemExists,
		C3.Plugins.LocalStorage.Exps.ItemValue,
		C3.Plugins.Sprite.Exps.AnimationFrame,
		C3.Plugins.LocalStorage.Acts.SetItem,
		C3.Plugins.Mouse.Cnds.IsOverObject,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.TextBox.Acts.SetCSSStyle,
		C3.Plugins.TextBox.Cnds.CompareText,
		C3.Plugins.TextBox.Acts.SetText,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.Sprite.Acts.SetDefaultColor,
		C3.Plugins.System.Exps.rgba,
		C3.Plugins.TextBox.Exps.Text,
		C3.Behaviors.Flash.Acts.Flash,
		C3.Plugins.LocalStorage.Acts.RemoveItem,
		C3.Plugins.TextBox.Acts.SetVisible
	];
};
self.C3_JsPropNameTable = [
	{Solid: 0},
	{Tilemap: 0},
	{spr_player_graphic: 0},
	{JumpCount: 0},
	{Platform: 0},
	{DragDrop: 0},
	{spr_player_base: 0},
	{Timer: 0},
	{spr_door: 0},
	{Touch: 0},
	{Keyboard: 0},
	{Mouse: 0},
	{key_var: 0},
	{key: 0},
	{spr_key: 0},
	{IDTEXT: 0},
	{Tween: 0},
	{UITip: 0},
	{var_id: 0},
	{GameManager: 0},
	{spr_Clock: 0},
	{par_sparckles: 0},
	{Explosion: 0},
	{spr_dark_area: 0},
	{hidden_solid: 0},
	{spr_ground_draggable: 0},
	{spr_lava: 0},
	{spr_spike: 0},
	{spr_gate: 0},
	{par_smoke: 0},
	{State: 0},
	{MoveTo: 0},
	{Ghost: 0},
	{ScrollTo: 0},
	{Camera: 0},
	{Sprite2: 0},
	{spr_ceilling: 0},
	{spr_fire: 0},
	{spr_fall_spike: 0},
	{Player_Clone: 0},
	{spr_player_key: 0},
	{ButtonClicked: 0},
	{Pause_Btn: 0},
	{Restart_Btn: 0},
	{Pause_bg: 0},
	{resume_btn: 0},
	{Menu_Btn: 0},
	{Audio_Btn: 0},
	{Music_Btn: 0},
	{Menu_bg_black: 0},
	{Audio: 0},
	{LocalStorage: 0},
	{FadeSprite: 0},
	{spr_secret_wall: 0},
	{spr_border: 0},
	{TiledBackground: 0},
	{Sprite: 0},
	{Sine: 0},
	{"9patch": 0},
	{Sprite3: 0},
	{Flash: 0},
	{spr_txt_new_game: 0},
	{spr_txt_continue: 0},
	{spr_txt_Quit: 0},
	{ButtonID: 0},
	{spr_button_Screen: 0},
	{Arrows: 0},
	{Left_Button: 0},
	{Right_Button: 0},
	{Btn_Pressed: 0},
	{Btn_skip_ad: 0},
	{TextInput: 0},
	{Scene: 0},
	{Back_Btn: 0},
	{ButtonsHuds: 0},
	{Menu: 0},
	{IsDead: 0},
	{Sound: 0},
	{Music: 0},
	{Paused: 0},
	{var_name_player: 0},
	{Level: 0},
	{BackToMenu: 0},
	{direction: 0},
	{MenuSelected: 0},
	{ControlMethod: 0},
	{MenuOption: 0}
];

self.InstanceType = {
	Tilemap: class extends self.ITilemapInstance {},
	spr_player_graphic: class extends self.ISpriteInstance {},
	spr_player_base: class extends self.ISpriteInstance {},
	spr_door: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	Keyboard: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	spr_key: class extends self.ISpriteInstance {},
	UITip: class extends self.ISpriteFontInstance {},
	GameManager: class extends self.ISpriteInstance {},
	spr_Clock: class extends self.ISpriteInstance {},
	par_sparckles: class extends self.IParticlesInstance {},
	Explosion: class extends self.ISpriteInstance {},
	spr_dark_area: class extends self.ITiledBackgroundInstance {},
	hidden_solid: class extends self.ITiledBackgroundInstance {},
	spr_ground_draggable: class extends self.ISpriteInstance {},
	spr_lava: class extends self.ITiledBackgroundInstance {},
	spr_spike: class extends self.ISpriteInstance {},
	spr_gate: class extends self.ITiledBackgroundInstance {},
	par_smoke: class extends self.IParticlesInstance {},
	Ghost: class extends self.ISpriteInstance {},
	Camera: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	spr_ceilling: class extends self.ITiledBackgroundInstance {},
	spr_fire: class extends self.ISpriteInstance {},
	spr_fall_spike: class extends self.ISpriteInstance {},
	Player_Clone: class extends self.ISpriteInstance {},
	spr_player_key: class extends self.ISpriteInstance {},
	Pause_Btn: class extends self.ISpriteInstance {},
	Restart_Btn: class extends self.ISpriteInstance {},
	Pause_bg: class extends self.IWorldInstance {},
	resume_btn: class extends self.ISpriteInstance {},
	Menu_Btn: class extends self.ISpriteInstance {},
	Audio_Btn: class extends self.ISpriteInstance {},
	Music_Btn: class extends self.ISpriteInstance {},
	Menu_bg_black: class extends self.ITiledBackgroundInstance {},
	Audio: class extends self.IInstance {},
	LocalStorage: class extends self.IInstance {},
	FadeSprite: class extends self.ISpriteInstance {},
	spr_secret_wall: class extends self.ITiledBackgroundInstance {},
	spr_border: class extends self.ITiledBackgroundInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Sprite: class extends self.ISpriteInstance {},
	_9patch: class extends self.IWorldInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	spr_txt_new_game: class extends self.ISpriteInstance {},
	spr_txt_continue: class extends self.ISpriteInstance {},
	spr_txt_Quit: class extends self.ISpriteInstance {},
	spr_button_Screen: class extends self.ISpriteInstance {},
	Arrows: class extends self.ISpriteInstance {},
	Left_Button: class extends self.ITiledBackgroundInstance {},
	Right_Button: class extends self.ITiledBackgroundInstance {},
	Btn_skip_ad: class extends self.ISpriteInstance {},
	TextInput: class extends self.ITextInputInstance {},
	Scene: class extends self.ISpriteInstance {},
	Back_Btn: class extends self.ISpriteInstance {},
	ButtonsHuds: class extends self.ISpriteInstance {},
	Menu: class extends self.ISpriteInstance {}
}